import { Response } from "express"

type TSendSuccessResponse<T> ={
    statusCode :number,
    message:string,
    data:T|T[]|null
    }
    
   export const sendSuccessResponse = <T>(res:Response,data:TSendSuccessResponse<T>)=>{
      res.status(data.statusCode).json({
        status:"success",
        message:data.message,
        data:data.data
      })
    }