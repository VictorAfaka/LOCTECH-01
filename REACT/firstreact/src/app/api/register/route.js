import { NextResponse } from "next/server"

export const POST= async(request)=>{

    // take incoming values
    const {fName, LName, age, phone}=await request.json()
    
    return new NextResponse("recieved user data", {status:200} )

}

