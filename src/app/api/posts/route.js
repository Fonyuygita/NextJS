
import connect from "@/utils/db";
import {NextResponse} from "next/server"
import Post from "@/models/Posts"

// ................................POST REQUEST........................................................

 export const GET=async(request)=>{
    try{
const check=await connect()
  if(!check){
    console.log("error ocurred");
  }      
  else{
    console.log("success")
    console.log(check);
  }
  const posts=Post.find()
      
        return new NextResponse(posts, {status:200});

        // return new NextResponse("connected", {status:200});


    }catch(error){

        return new NextResponse("Database error",{status:500});

    }
}
// .......................................END OF POST REQUEST.....................................