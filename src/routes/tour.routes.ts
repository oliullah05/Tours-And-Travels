import express from "express"
import { tourController } from "../controllers/tour.controller";


const tourRoutes = express.Router();
tourRoutes.post("/create-tour",tourController.createTour)
tourRoutes.get("/",tourController.getAllTour)
tourRoutes.get("/:id",tourController.getSingleTour)
tourRoutes.put("/:id",tourController.updateTour)
tourRoutes.delete("/:id",tourController.deleteTour)





export {tourRoutes}