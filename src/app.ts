import express, { Application, Request, Response } from "express"
export  const app:Application = express()
import cors from "cors"
import { userRoutes } from "./routes/user.route"

// parsers
app.use(express.json())
app.use(cors())


//middlewars


app.use("/api/v1/users",userRoutes)

app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    success:true,
    message:"welcome to Tours And Travels server"
  })
})


export default app;
