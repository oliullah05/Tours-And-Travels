import { Request, Response } from "express";

import { tourServices } from "../services/tour.service";

const createTour =async(req:Request,res:Response)=>{
try{
    const tourData = req.body;
    const result = await tourServices.createTour(tourData)
res.status(201).json({
    status:"success",
    message:"tour created successfully",
    data:result
})
}

catch(error:any){
    res.status(500).json({
        status:"fail",
        message:error.message || "tour created unsuccessful"
    })
}
}

const getAllTour =async(req:Request,res:Response)=>{
    try{
        
        const result = await tourServices.getAllTour()
    res.status(200).json({
        status:"success",
        message:"tours find successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "tours find unsuccessful"
        })
    }
    }



const getSingleTour =async(req:Request,res:Response)=>{
    try{
        const tourId = req.params.id;
        const result = await tourServices.getSingleTour(tourId)
    res.status(200).json({
        status:"success",
        message:"tour find successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "tour find unsuccessful"
        })
    }
    }


const deleteTour =async(req:Request,res:Response)=>{
    try{
        const tourId = req.params.id;
        await tourServices.deleteTour(tourId)
    res.status(200).json({
        status:"success",
        message:"tour delted successfully"
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "tour delete unsuccessful"
        })
    }
    }


// const getNextSchedule =async(req:Request,res:Response)=>{
//     try{
//         const tourId = req.params.id;
//     const result =    await tourServices.getNextSchedule(tourId)
//     res.status(200).json({
//         status:"success",
//         message:"nearest schedule fatched successfully",
//         data:result
//     })
//     }
    
//     catch(error:any){
//         res.status(500).json({
//             status:"fail",
//             message:error.message || "tour delete unsuccessful"
//         })
//     }
//     }

    
const updateTour =async(req:Request,res:Response)=>{
    try{
        const tourId = req.params.id;
     const tourData= req.body;
        const result = await tourServices.updateTour(tourId,tourData)
    res.status(200).json({
        status:"success",
        message:"tour updated successfully",
        data:result
    })
    }
    
    catch(error:any){
        res.status(500).json({
            status:"fail",
            message:error.message || "tour update unsuccessful"
        })
    }
    }
    


export const  tourController = {
    createTour,
    getSingleTour,
    deleteTour,
    updateTour,
  
    getAllTour
}