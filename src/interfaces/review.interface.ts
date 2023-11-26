import { Schema } from "mongoose";

interface IReview {
    review:string,
    rating: number,
    createdAt: Date;
    tourId:Schema.Types.ObjectId,
    userId:Schema.Types.ObjectId, 
  }
  export {IReview}