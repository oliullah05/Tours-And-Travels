import { app } from "./app"
import  mongoose from 'mongoose';

const port = 3000



// getting-started.js
async function server() {
try{
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("mongodb");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
catch(err){
  console.log(err);
}

 
}






server().catch(err => console.log(err));