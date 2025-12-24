import express from 'express';

export const authRouter = express.Router();
import { loginValidation, signupValidation } from '../validation/validation.js';
import bcrypt from 'bcrypt';
import { UserModal } from '../modals/user.js';
import { userAuth } from '../config/middleware.js';
import jwt from 'jsonwebtoken';
import { response } from '../helper/response.js';

authRouter.post('/signup', async (req, res) => {
    try {
        signupValidation(req);
        let { firstName, lastName, email, password } = req?.body

        const isHashPassword = await bcrypt.hash(password, 10);

        let userInstance = new UserModal({ firstName, lastName, email, password: isHashPassword });
        let updateUser = await userInstance.save();

        response(res, 201, 'User signup successfully', updateUser)
    } catch (error) {
        response(res, 400, error.message)
    }
})

authRouter.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        loginValidation({ email, password });

        let user = await UserModal.findOne({ email: email });
        if (!user) {
            res.status(404).send(`User not found with this ${email}`)
        }
        let decoded = await user.compareHashPassword(password);
        if (decoded) {
            let token = await user.getJwt();
            res.cookie("token", token, { expires: new Date(Date.now() + 24 * 7 * 3600000) });
            response(res, 200, 'User login successfully')
        }
    } catch (error) {
        response(res, 400, error.message)
    }
})

authRouter.post("/logout", userAuth, async (req, res) => {
    try {
        let { user } = req;
        await jwt.sign({ _id: user?._id }, "Common@7070", { expiresIn: '0d' });
        res.cookie("token", null, { expires: new Date(Date.now()) });
        res.send("User Logout successfully")
    } catch (error) {
        res.status(400).send('Error in signup' + error)
    }
})