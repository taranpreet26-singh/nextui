import { PrismaClient } from "@/lib/generated/prisma"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    try {
        const {email,password} = await req.json()
        console.log(email,password)
        const response = await prisma.admin.findUnique({
            where:{
                email:"ramghrialoveysingh123@gmail.com",
                password:"Ramgharia@nextui2626"
            },
            select:{
                id:true
            }
        })
        console.log(response)
        if(response?.id){
            return NextResponse.json({
                status:200,
                msg:"Welcome Back Admin"
            })
        }else{
            return NextResponse.json({
                status:401,
                msg:"Please Check you credentials"
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status:500,
            msg:"Server Error"
        })
    }
}