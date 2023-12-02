/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import express, { Application, NextFunction, Request, Response, request } from 'express'
import { userRoutes } from './routes/user.route'
import cors from 'cors'
import { tourRoutes } from './routes/tour.route'
import { reviewRoutes } from './routes/review.route'

import { globalErrorHandler } from './middlewars/globalErrorHandler'
import notFound from './middlewars/notFound'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/tours', tourRoutes)
app.use('/api/v1/reviews', reviewRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to  Murir Tin Tours & Travels',
  })
})


//catch all routes               // to catch not found route


// way-1

// app.all("*",(req: Request, res: Response) => {
//   res.status(404).json({
//     status: 'fail',
//     message: `Route Not Found for ${req.originalUrl}`,
//   })
// })


// way-2
// app.all("*",notFound)



// not found route using middlewar
// app.use("*",notFound)


// not found route using middlewar-2
app.use(notFound)



//global error handler done

app.use(globalErrorHandler)

export default app
