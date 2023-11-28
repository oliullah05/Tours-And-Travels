import { ITour } from "../interfaces/tour.interface";
import { TourModel } from "../models/tour.model";


const createTour = async (tourData: ITour): Promise<ITour> => {
    const result = await TourModel.create(tourData)
    return result;




    //mongoose built in instance method
    //   const result = await new TourModel (tourData)
    //   result.save()

}
const getAllTour = async (): Promise<ITour[]> => {
    const result = await TourModel.find();
    return result
}
const getSingleTour = async (id: string): Promise<ITour | null> => {
    const result = await TourModel.findById(id)
    return result
}


const updateTour = async (id: string, tourData: ITour): Promise<ITour | null> => {

    const result = await TourModel.findByIdAndUpdate(id, tourData, {
        new: true,
        runValidators: true
    })
    return result
}



const deleteTour = async (id: string): Promise<ITour | null> => {
    const result = await TourModel.findByIdAndDelete(id)
    return result
}
const getNextSchedule = async (id: string): Promise<any> => {
    const tour = await TourModel.findById(id)
    const nextSchedule = tour?.getNextNearestStartDateAndEndDate();
    return {
        tour,
        nextSchedule
    }
}



export const tourServices = {
    createTour,
    getAllTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}