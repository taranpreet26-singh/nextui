import cloudinary from "@/lib/cloudinary";
import { PrismaClient } from "@/lib/generated/prisma";
import { UploadApiResponse } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()
        const file = formData.get('file') as File
        const name = formData.get('name')
        const shortInfo = formData.get('shortInfo') 
        const stringFile  = formData.get("stringFile") as string
        console.log(stringFile)
        if(file){
            if (!file || typeof name !== "string" || typeof shortInfo !== "string") {
                return NextResponse.json({ msg: "Invalid form data" }, { status: 400 });
            }
            const arrayBuffer = await file.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer)
            const uploadedResponse: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader
                .upload_stream({ resource_type: "image" }, (error, result) => {
                    if (result)
                        if (error) reject(error);
                    else resolve(result);
                })
                .end(buffer);
            });
            
            const response = await prisma.component.upsert({
                where: {
                    name
                },
                update: {
                    image: uploadedResponse?.secure_url,
                    shortInfo
                },
                create: {
                    name: name.replaceAll(" ", "-"),
                    image: uploadedResponse?.secure_url,
                    shortInfo
                },
                select: {
                    id: true
                }
            })
            if (response.id) {
                return NextResponse.json({
                    status: 200,
                    msg: `${name} Uploaded`
                })
            } else {
                return NextResponse.json({
                    status: 401,
                    msg: "Process hung Or Server Error"
                })
            }
        }else{
            if (!stringFile || typeof name !== "string" || typeof shortInfo !== "string") {
                return NextResponse.json({ msg: "Invalid form data" }, { status: 400 });
            }
            
            
            const response = await prisma.component.upsert({
                where: {
                    name
                },
                update: {
                    image: stringFile,
                    shortInfo
                },
                create: {
                    name: name.replaceAll(" ", "-"),
                    image: stringFile,
                    shortInfo
                },
                select: {
                    id: true
                }
            })
            if (response.id) {
                return NextResponse.json({
                    status: 200,
                    msg: `${name} Uploaded`
                })
            } else {
                return NextResponse.json({
                    status: 401,
                    msg: "Process hung Or Server Error"
                })
            }
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            msg: "Server Error"
        })
    }
}


export async function GET(req: NextRequest) {
    try {
        const response = await prisma.component.findMany()
        return NextResponse.json({
            status: 200,
            msg: response
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            msg: "Server Error"
        })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { name } = await req.json()
        console.log(name)
        const response = await prisma.component.findFirst({
            where: { name },
            select: { id: true }
        })

        if (!response?.id) {
            return NextResponse.json({
                msg: "No such component present in server"
            })
        } else {
            const deleteResponse = await prisma.component.delete({
                where: { name },
                select: { name: true }
            })
            if (deleteResponse.name) {
                return NextResponse.json({
                    msg: `${name} is Deleted`
                })
            } else {
                return NextResponse.json({
                    msg: `Unexpected Error Occur`
                })
            }
        }


    } catch (error) {
        console.log(error)
        return NextResponse.json({
            status: 500,
            msg: "Server Error"
        })
    }
}