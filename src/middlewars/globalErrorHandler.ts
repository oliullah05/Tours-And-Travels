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
    message = "Validation Error";
    status = "error";
    const errorValues = Object.values(err.errors);
    errorValues.forEach((errObject: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      issues.push({
        path: errObject.path,
        message: errObject.message

      })
    })
  }









  res.status(statusCode).json({
    status,
    message,
    issues: issues,
    // Myerror: err
  })
}