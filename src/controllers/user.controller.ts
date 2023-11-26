import { Request, Response } from "express";

import { userServices } from "../services/user.service";

const createUser =async(req:Request,res:Response)=>{
try{
    const userData = req.body;
    const result = await userServices.createUser(userData)
res.status(201).json({
    status:"success",
    message:"user created successfully",
    data:result
})
}

catch(error:any){
    res.status(500).json({
        status:"fail",
        message:error.message || "user created unsuccessful"
    })
}
}

const getAllUser =async(req:Request,res:Response)=>{
    try{
        
        const result = await userServices.getAllUser()
    res.status(200).json({
        status:"success",
        message:"users find successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "users find unsuccessful"
        })
    }
    }



const getSingleUser =async(req:Request,res:Response)=>{
    try{
        const userId = req.params.id;
        const result = await userServices.getSingleUser(userId)
    res.status(200).json({
        status:"success",
        message:"user find successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "user find unsuccessful"
        })
    }
    }


const deleteUser =async(req:Request,res:Response)=>{
    try{
        const userId = req.params.id;
        await userServices.deleteUser(userId)
    res.status(200).json({
        status:"success",
        message:"user delted successfully"
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "user delete unsuccessful"
        })
    }
    }
    
const updateUser =async(req:Request,res:Response)=>{
    try{
        const userId = req.params.id;
     const userData= req.body;
        const result = await userServices.updateUser(userId,userData)
    res.status(200).json({
        status:"success",
        message:"user updated successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "user update unsuccessful"
        })
    }
    }
    


export const  userController = {
    createUser,
    getSingleUser,
    deleteUser,
    updateUser,
    getAllUser}