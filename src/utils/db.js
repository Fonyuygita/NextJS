import mongoose from "mongoose";

import {NextResponse} from "next/server"

 const connect=async()=>{
    try{
// connect to database 
        await mongoose.connect(process.env.MONGO_URI);
        
      


    }catch(error){
        // if there is an error, we want to catch it
        

        throw new Error("Connection failed try reconnecting");
    }
}
// give the  connection method out, to be used by other routes in our api
export default connect;