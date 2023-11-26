import { Request, Response } from "express";

import { reviewServices } from "../services/review.service";

const createReview =async(req:Request,res:Response)=>{
try{
    const reviewData = req.body;
    const result = await reviewServices.createReview(reviewData)
res.status(201).json({
    status:"success",
    message:"review created successfully",
    data:result
})
}

catch(error:any){
    res.status(500).json({
        status:"fail",
        message:error.message || "review created unsuccessful"
    })
}
}

const getAllReview =async(req:Request,res:Response)=>{
    try{
        
        const result = await reviewServices.getAllReview()
    res.status(200).json({
        status:"success",
        message:"reviews find successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "reviews find unsuccessful"
        })
    }
    }



const getSingleReview =async(req:Request,res:Response)=>{
    try{
        const reviewId = req.params.id;
        const result = await reviewServices.getSingleReview(reviewId)
    res.status(200).json({
        status:"success",
        message:"review find successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "review find unsuccessful"
        })
    }
    }


const deleteReview =async(req:Request,res:Response)=>{
    try{
        const reviewId = req.params.id;
        await reviewServices.deleteReview(reviewId)
    res.status(200).json({
        status:"success",
        message:"review delted successfully"
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "review delete unsuccessful"
        })
    }
    }
    
const updateReview =async(req:Request,res:Response)=>{
    try{
        const reviewId = req.params.id;
     const reviewData= req.body;
        const result = await reviewServices.updateReview(reviewId,reviewData)
    res.status(200).json({
        status:"success",
        message:"review updated successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "review update unsuccessful"
        })
    }
    }
    


export const  reviewController = {
    createReview,
    getSingleReview,
    deleteReview,
    updateReview,
    getAllReview}