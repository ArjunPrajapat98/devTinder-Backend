export const userProfileController = async (req, res) => {
    try {
        let loginUser = req.user;

        res.status(500).json({
            message: 'success',
            success: true,
            result: loginUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}