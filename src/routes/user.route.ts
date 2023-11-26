import express from "express"
import { userController } from "../controllers/user.controller";


const userRoutes = express.Router();
userRoutes.post("/create-user",userController.createUser)





export {userRoutes}