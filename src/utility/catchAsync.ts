import { NextFunction, Request, RequestHandler, Response } from "express"

export const catchAsyncFuntion = (fn:RequestHandler)=>{
    return (req: Request, res: Response,next:NextFunction) => {
  
  return Promise.resolve(fn(req,res,next)).catch(err=>{next (err)})
  
    }
  }