/* eslint-disable @typescript-eslint/no-explicit-any */

import mongoose from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'
import Booking from '../models/booking.model'
import Tour from '../models/tour.model'

const createBooking = async (BookingData: IBooking): Promise<IBooking> => {
  const session =await mongoose.startSession();

session.startTransaction();
  
  try {
    const booking = await Booking.create([BookingData], { session: session });
  
    if (!booking) {
      throw new Error("Booking can't be created");
    }
  
 const UpdateTourAvailableSeats =   await Tour.findByIdAndUpdate(
      booking[0].tour,
      {
        $inc: { availableSeats: -booking[0].bookSlot }
      },
     {
      session:session
     }
    );

if(!UpdateTourAvailableSeats){
  throw new Error("AvailableSeats can't be updated");
}

await session.commitTransaction();
await session.endSession()
return booking[0]
}
catch(err:any){
 await session.abortTransaction();
 await session.endSession();
 throw new Error(err)
}



}

const getAllBookings = async (): Promise<IBooking[]> => {
  const result = await Booking.find()



  return result
}

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findOne({user:id})
  return result
}

const updateBooking = async (
  id: string,
  BookingData: IBooking,
): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate({user:id}, BookingData, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findOneAndDelete({user:id})
  return result
}

export const BookingServices = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
}

