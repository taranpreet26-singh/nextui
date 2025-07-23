import { PrismaClient } from "@/lib/generated/prisma"

async function seed() {
    try {
        const obj = {
            id:"123",
            image:"https://res.cloudinary.com/dlgxcxkgb/image/upload/v1753122527/z58y1oh3zixte1gjkczg.png",
            name:"dummyname",
            shortInfo:"this is shortinfo"
        }

        const prisma = new PrismaClient()

        const response =await prisma.component.upsert({
            create:{
                name:obj.name,
                image:obj.image,
                shortInfo:obj.shortInfo
            },
            update:{
                image:obj.image,
                shortInfo:obj.shortInfo
            },
            where:{
                name:obj.name
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

seed()