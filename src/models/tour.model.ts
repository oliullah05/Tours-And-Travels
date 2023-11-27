import {Schema, model } from "mongoose";
import { ITour, ITourMethods, ITourModel } from "../interfaces/tour.interface";
import slugify from "slugify"

const tourSchema = new Schema<ITour,ITourModel,ITourMethods>({
  name: { type: String, required: [true, 'Name is required.'], trim: true },
  durationHours: { type: Number, required: [true, 'Duration is required.'] },
  ratingAverage: { type: Number, required: [true, 'Rating average is required.'] },
  ratingQuantity: { type: Number, required: [true, 'Rating quantity is required.'] },
  price: { type: Number, required: [true, 'Price is required.'] },
  imageCover: { type: String, required: [true, 'Image cover is required.'] },
  images: { type: [String], required: [true, 'Images are required.'] },
  createdAt: { type: Date, required: [true, 'Creation date is required.'] },
  startDates: { type: [Date], required: [true, 'Start dates are required.'] },
  startLocation: { type: String, required: [true, 'Start location is required.'] },
  locations: { type: [String], required: [true, 'Locations are required.'] },
  slug: { type: String },
},{
  
  toJSON:{virtuals:true},
  toObject:{virtuals:true}


});


tourSchema.virtual("durationDays").get(function(){
return    this.durationHours/24
})


tourSchema.pre("save",function(next){
this.slug=slugify(this.name,{
  trim:true,
  lower:true
})
next()
})



tourSchema.methods.getNextNearestStartDateAndEndDate = function (): {
  nearestStartDate: Date | null
  estimatedEndDate: Date | null
} {
  const today = new Date()
  const futureDates = this.startDates.filter((startDate: Date) => {
      return startDate > today
  })
  //   65893905746394 - 4873843278478478

  futureDates.sort((a: Date, b:Date) => a.getTime() - b.getTime())

  const nearestStartDate = futureDates[0]
  const estimatedEndDate = new Date(
      nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  )

  return {
      nearestStartDate,
      estimatedEndDate,
  }
}



export const TourModel = model<ITour,ITourModel>('Tour', tourSchema);
