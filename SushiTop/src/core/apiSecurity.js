function validateUrl(url) { // пункт 1
    if (typeof url !== 'string' || url.trim() === '') {
        throw new Error('URL must be a non-empty string')
    }

    try {
        new URL(url)
    } 
    catch {
        throw new Error(`Invalid URL format: ${url}`)
    }
}

function validateMethod(method) {
    const allowed = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
    const upper = method.toUpperCase()

    if (!allowed.includes(upper)) {
        throw new Error(`HTTP method not allowed: ${method}`)
    }
    return upper
}

function validatePayload(data, maxSize = 1000000) {
    if (!data) {
        return null
    }
    
    let str

    try {
        str = typeof data === 'string' ? data : JSON.stringify(data)
    }
    catch {
        throw new Error('Payload is not valid JSON')
    }
    
    if (str.length > maxSize) {
        throw new Error(`Payload exceeds maximum size of ${maxSize} bytes`)
    }
    return str
}

function sanitizeResponse(obj) {
    if (typeof obj === 'string') {
        return obj.replace(/[<>]/g, '')
    }
    if (Array.isArray(obj)) {
        return obj.map(sanitizeResponse)
    }
    if (obj && typeof obj === 'object') {
        const sanitized = {}
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                sanitized[key] = sanitizeResponse(obj[key])
            }
        }
        return sanitized
    }
    return obj
}

function buildSecureHeaders() {
    const headers = { 'Content-Type': 'application/json' }
    
    const authToken = localStorage.getItem('auth_token')
    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`
    }
    
    const csrfToken = localStorage.getItem('csrf_token')
    if (csrfToken) {
        headers['X-CSRF-Token'] = csrfToken
    }
    
    return headers
}

async function retryWithBackoff(fn, maxAttempts = 3, baseDelay = 500) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        try {
            return await fn()
        } catch (err) {
            if (attempt === maxAttempts - 1) throw err
            if (err.name !== 'TypeError') throw err

            const delay = baseDelay * Math.pow(2, attempt)
            console.log(`Network error, retrying in ${delay}ms (attempt ${attempt + 1}/${maxAttempts})`);
            await new Promise(r => setTimeout(r, delay))
        }
    }
}

function logError(error, context) {
    console.log('[API Error]', {
        name: error.name,
        message: error.message,
        context,
        timestamp: new Date().toISOString()
    });
}

export async function fetchRequestSecure(url, method = 'GET', data = null, errorMessage = 'Ошибка запроса') {
    try {
        validateUrl(url)
        method = validateMethod(method)
        
        if (url.startsWith('http://')) {
            url = url.replace('http://', 'https://')
            console.log('Upgraded insecure HTTP to HTTPS');
        }
        
        let bodyString = null
        try {
            bodyString = validatePayload(data)
        } catch (err) {
            logError(err, 'Payload validation')
            throw new Error(errorMessage)
        }
        
        const headers = buildSecureHeaders()
        
        return await retryWithBackoff(async () => {
            const result = await fetch(url, {
                method,
                headers,
                body: bodyString,
                cache: 'no-store',
                credentials: 'same-origin'
            })
            
            if (!result.ok) {
                if (result.status === 401 || result.status === 403) {
                    const err = new Error(errorMessage)
                    err.status = result.status
                    logError(err, `Auth failed (${result.status})`)
                    throw err
                }
                if (result.status === 404) {
                    const err = new Error(errorMessage)
                    err.status = 404
                    err.name = 'NotFoundError'
                    logError(err, 'Resource not found')
                    throw err
                }
                const err = new Error(errorMessage)
                err.status = result.status
                logError(err, `HTTP ${result.status}`)
                throw err
            }
            
            if (result.status === 204) return null
            
            const contentType = result.headers.get('content-type') || ''
            if (contentType.includes('application/json')) {
                const jsonData = await result.json()
                return sanitizeResponse(jsonData)
            }
            
            return null
        }, 3, 500)
        
    } catch (err) {
        logError(err, 'fetchRequestSecure')
        throw err
    }
}

export { validateUrl, validateMethod, validatePayload, sanitizeResponse, buildSecureHeaders, retryWithBackoff }

(async () => {
    try {
        const demoUrl = 'https://jsonplaceholder.typicode.com/posts/1'
        console.log('[demo] fetching', demoUrl);
        const data = await fetchRequestSecure(demoUrl)
        console.log('[demo] success', data);
    } catch (e) {
        console.log('[demo] fetch failed', e);
    }
})()