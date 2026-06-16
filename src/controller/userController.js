import { userModal } from "../modals/user.js"

export const userController = async (req, res) => {
    try {
        let object = {
            name: "Arjun",
            age: 10
        }
        const userInstance = new userModal(object);
        let updateUser = await userInstance.save();
        console.log('updateUser', updateUser)
        res.status(200).send(updateUser)
    } catch (error) {
        res.status(500).send('Error')
    }
}

export const defaultController = (req, res) => {
    try {
        res.status(200).send('This is a default controller')
    } catch (error) {
        res.status(500).send('Error')
    }
}