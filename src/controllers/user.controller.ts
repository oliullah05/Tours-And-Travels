/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { userServices } from '../services/user.service'
import { sendSuccessResponse } from '../utility/sendSuccessResponse'








const createUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const userData = req.body
    const result = await userServices.createUser(userData)


    sendSuccessResponse(res,{
      statusCode:201,
      message:"user created successfully",
      data:result
    })



  } catch (error: any) {
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await userServices.getAllUsers()
    res.status(200).json({
      status: 'success',
      message: 'User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next()
  }
}
const getSingleUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id
    const result = await userServices.getSingleUser(id)
    res.status(200).json({
      status: 'success',
      message: 'Single User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next()
  }
}
const updateUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const userData = req.body
    const id = req.params.id
    const result = await userServices.updateUser(id, userData)
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: result,
    })
  } catch (error: any) {
    next()
  }
}
const deleteUser = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id
    await userServices.deleteUser(id)
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    })
  } catch (error: any) {
    next()
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
