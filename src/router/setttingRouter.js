export const routeHandlerFunction = (req, res) => {
    const param = req.params
    res.status(200).send(param);
}