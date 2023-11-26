import express from "express"
import { userController } from "../controllers/user.controller";


const userRoutes = express.Router();
userRoutes.post("/create-user",userController.createUser)
userRoutes.get("/",userController.getAllUser)
userRoutes.get("/:id",userController.getSingleUser)
userRoutes.put("/:id",userController.updateUser)
userRoutes.delete("/:id",userController.deleteUser)




export {userRoutes}