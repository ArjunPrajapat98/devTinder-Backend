export const validate = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).json({
            message: "Validation error",
            errors: error?.details[0]?.message
        });
    }
    req.body = value;
    next();
};
