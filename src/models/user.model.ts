import mongoose, { Document, Query, Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema<IUser>({
    name: { type: String, required: [true,"please tell us your name"] ,trim:true},
     email: { type: String, required: [true,"please tell us your email"], unique: true,lowercase:true,trim:true },
      age:{type:Number,required:[true,"please tell us your age"]},
      photo:String,
      role:{
        type:String,
        enum:["user","admin"],
        message:"role must me either user or admin . your given {VALUE} is wrong",
        default:"user"
      },

   userStatus:{
    type:String,
    enum:['active' , 'inactive' , 'pending'],
    message:"userStatus must me either active or inactive or pending . your given {VALUE} is wrong",
    default:"active"
   }

      }
  );



  //for all find middleware user this /^find/ regular expretion
  
  userSchema.pre(/^find/,function(this:Query<IUser,Document>,next){
    this.find({userStatus:{$eq:"active"}})
    next()
  })




  
//   userSchema.pre("findOne",function(next){
//     this.find({userStatus:{$eq:"active"}})
//     next()
//   })












const UserModel = model<IUser>("User",userSchema)

export { UserModel };