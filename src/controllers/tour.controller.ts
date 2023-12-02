/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { tourServices } from '../services/tour.service'
import { sendSuccessResponse } from '../utility/sendSuccessResponse'
import { catchAsyncFuntion } from '../utility/catchAsync'













const createTour = catchAsyncFuntion(async (req: Request, res: Response) => {
    const tourData = req.body
    const result = await tourServices.createTour(tourData)
    res.status(201).json({
      status: 'success',
      message: 'Tour created successfully',
      data: result,
    })
}) 





const getAllTours =catchAsyncFuntion( async (req: Request, res: Response) => {
    const result = await tourServices.getAllTours()
   sendSuccessResponse(res,{
    statusCode:200,
    message:"Tours are getting successfully",
    data:result
   })

})




const getSingleTour = catchAsyncFuntion(async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await tourServices.getSingleTour(id)
    res.status(200).json({
      status: 'success',
      message: 'Single Tour fetched successfully',
      data: result,
    })
})


const updateTour = catchAsyncFuntion(async (req: Request, res: Response) => {
    const tourData = req.body
    const id = req.params.id
    const result = await tourServices.updateTour(id, tourData)
    res.status(200).json({
      status: 'success',
      message: 'Tour updated successfully',
      data: result,
    })
  
})


const getNextSchedule = catchAsyncFuntion(async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await tourServices.getNextSchedule(id)
    res.status(200).json({
      status: 'success',
      message: 'Next Schedule fetched successfully',
      data: result,
    })
})


const deleteTour = catchAsyncFuntion(async (req: Request, res: Response) => {
    const id = req.params.id
    await tourServices.deleteTour(id)
    res.status(200).json({
      status: 'success',
      message: 'Tour deleted successfully',
    })
})




export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
