import { Types } from "mongoose";

export interface IBooking {
    user: Types.ObjectId;
    tour: Types.ObjectId;
    bookSlot:number,
    price:number,
    bookingStatus:"pending" | "paid" |"cancelled"
}