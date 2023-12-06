/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "something went wrong";
  let status = err.status || "error";
  const issues = err.issues || []


  // capture mongooseError - Validation


  // if(err.name && err.name=="ValidationError"){
  //   console.log("validation error",11111111);
  // }

  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    status = "error";
    message = "Validation Error";
    const errorValues = Object.values(err.errors);
    errorValues.forEach((errObject: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      issues.push({
        path: errObject.path,
        message: errObject.message

      })
    })
  }


//capture mongooseError - Duplicate Error


if(err.code && err.code===11000){
  statusCode = 409;

  
  const inputString = err.message;

const regex = /{ name: "(.*?)"/;
const match = inputString.match(regex);


  const extractedValue = match[1];
  
  console.log(extractedValue); // This will print "oliullah"

  message =`VALUE is alrady exits`;
  status = "error";
  issues.push({
    path:"",
    message:`${extractedValue} is duplicate`
  })
}




console.log(statusCode);







  res.status(statusCode).json({
    status,
    message,
    issues: issues,
    Myerror: err
  })
}