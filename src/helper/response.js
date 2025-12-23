
export const response = (res, code, message = '', result = []) => {
    return res.status(code).json({
        message: message,
        result
    })
}