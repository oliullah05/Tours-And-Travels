import { Schema, model } from 'mongoose'

import { IBooking } from '../interfaces/booking.interface'

const bookingSchema = new Schema<IBooking>(
  {
    bookSlot: {
      type: Number,
      required: [true, 'Please tell us your bookSlot'],
    },
    bookingStatus:{
        type:String,
        enum:["pending" , "paid" ,"cancelled"],
        required:[true , "your given {VALUE} is not pending or paid or cancelled"]
    },
 
    price: {
      type: Number,
      required: [true, 'Please tell us your price'],
    },

    tour: {
      type: Schema.Types.ObjectId,
      ref: 'Tour',
      required: [true, 'Please tell us your tour'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please tell us your user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps:true
  },
)


const Booking = model<IBooking>('Booking', bookingSchema)

export default Booking
