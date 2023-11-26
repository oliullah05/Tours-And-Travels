import express from "express"
import { reviewController } from "../controllers/review.controller";


const reviewRoutes = express.Router();
reviewRoutes.post("/create-review",reviewController.createReview)
reviewRoutes.get("/",reviewController.getAllReview)
reviewRoutes.get("/:id",reviewController.getSingleReview)
reviewRoutes.put("/:id",reviewController.updateReview)
reviewRoutes.delete("/:id",reviewController.deleteReview)




export {reviewRoutes}