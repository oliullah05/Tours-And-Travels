import express from 'express'
import { bookingController } from '../controllers/booking.controller'


const router = express.Router()

router.post('/create-booking', bookingController.createUser)
router.get('/', bookingController.getAllUsers)
router.get('/:id', bookingController.getSingleUser)
router.patch('/:id', bookingController.updateUser)
router.get('/:id/get-all-booking', bookingController.updateUser)
router.delete('/:id', bookingController.deleteUser)

export const bookRoutes = router