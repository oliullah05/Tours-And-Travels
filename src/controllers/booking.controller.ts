/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'

import { sendSuccessResponse } from '../utility/sendSuccessResponse'
import { BookingServices } from '../services/booking.service'








const createUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const userData = req.body
    const result = await BookingServices.createBooking(userData)


    sendSuccessResponse(res,{
      statusCode:201,
      message:"Bookingcreated successfully",
      data:result
    })



  } catch (error: any) {
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await BookingServices.getAllBookings()
    res.status(200).json({
      status: 'success',
      message: 'Bookingfetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const getSingleUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id
    const result = await BookingServices.getSingleBooking(id)
    res.status(200).json({
      status: 'success',
      message: 'Single Bookingfetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const updateUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const userData = req.body
    const id = req.params.id
    const result = await BookingServices.updateBooking(id, userData)
    res.status(200).json({
      status: 'success',
      message: 'Bookingupdated successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const deleteUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id
    await BookingServices.deleteBooking(id)
    res.status(200).json({
      status: 'success',
      message: 'Booking deleted successfully',
    })
  } catch (error: any) {
    next(error)
  }
}

export const bookingController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
