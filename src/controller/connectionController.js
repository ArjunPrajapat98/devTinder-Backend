export const sendConnectionController = async (req, res) => {
    try {
        let { status, id } = req.params;

        res.send(req.params);

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}