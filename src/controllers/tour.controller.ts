/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { tourServices } from '../services/tour.service'

const createTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const tourData = req.body
    const result = await tourServices.createTour(tourData)
    res.status(201).json({
      status: 'success',
      message: 'Tour created successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const getAllTours = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await tourServices.getAllTours()
    res.status(200).json({
      status: 'success',
      message: 'Tour fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const getSingleTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id
    const result = await tourServices.getSingleTour(id)
    res.status(200).json({
      status: 'success',
      message: 'Single Tour fetched successfully',
      data: result,
    })
  } catch (error: any) {
   next(error)
  }
}
const updateTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const tourData = req.body
    const id = req.params.id
    const result = await tourServices.updateTour(id, tourData)
    res.status(200).json({
      status: 'success',
      message: 'Tour updated successfully',
      data: result,
    })
  } catch (error: any) {
  next(error)
  }
}
const getNextSchedule = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id
    const result = await tourServices.getNextSchedule(id)
    res.status(200).json({
      status: 'success',
      message: 'Next Schedule fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const deleteTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const id = req.params.id
    await tourServices.deleteTour(id)
    res.status(200).json({
      status: 'success',
      message: 'Tour deleted successfully',
    })
  } catch (error: any) {
    next(error)
  }
}

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
