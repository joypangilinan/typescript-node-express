class ErrorHandler extends Error {
    statusCode: number
    message: string
    constructor(statusCode: number, message: string) {
        super()
        this.statusCode = statusCode,
            this.message = message
    }
}

const handleError = (err: any, res: any) => {
    const { statusCode = 500, message = 'Internal Server Error' } = err

    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ status: 'error', statusCode: 401, message: err.message })
    }
    if (err.name === 'Forbidden') {
        res.status(403).json({ status: 'error', statusCode: 403, message: err.message })
    }
    if (err.name === 'NotFoundError') {
        res.status(404).json({ status: 'error', statusCode: 404, message: err.message })
    }

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    })
}
export {
    ErrorHandler,
    handleError
}