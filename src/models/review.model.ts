import { Schema, model } from "mongoose";
import { IReview } from "../interfaces/review.interface";

const reviewSchema = new Schema<IReview>({
    review: { type: String, required: [true, "Review is required"] },
    rating: { type: Number, required: [true, "Rating is required"] },
    createdAt: { type: Date, default: Date.now },
    tourId: { type: Schema.Types.ObjectId, required: [true, "Tour ID is required"] },
    userId: { type: Schema.Types.ObjectId, required: [true, "User ID is required"] },
});




//double field unique 
reviewSchema.index({ tourId: 1, userId: 1 }, { unique: true })










export const ReviewModel = model<IReview>("Review", reviewSchema);
