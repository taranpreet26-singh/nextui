"use client"
import { SparklesPreview } from "@/components/SparkelComponent"
import { ButtonBorder } from "@/components/ui/Button"
import { useRouter } from "next/navigation"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

type CredentialType = {
    email: string,
    password: string
}
export default function Dashboard() {
    const router = useRouter()
    const [loading,setLoading] = useState<string | null>(null)
    const [correctAdmin,setAdminCorrect] = useState<boolean>(false)
    async function AdminAuthorization() {
        try {
            setLoading("Loading....")
            if(credential.email !== "" || credential.password !== "" ){
                const response = await axios.post('/api/admin',
                    {
                       email: credential.email,
                       password:credential.password
                    }
                )
                if(response.status === 200){
                    toast.success(response.data.msg)
                    setAdminCorrect(true)
                    router.push('/admin/dashboard/uploads')
                    localStorage.setItem("approved","yes")
                }else{
                    toast.error(response.data.msg)
                }
            }else{
                toast.error("Please fill all the fields")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(null)
        }
    }

    function handleCredential(e: ChangeEvent<HTMLInputElement>) {
        const {name,value} = e.target
        console.log(name,value)
        setCredential(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const [credential, setCredential] = useState<CredentialType>({ email: "", password: "" })
    return <section className="w-full mx-auto   h-screen ">
        <div className="w-full flex flex-col-reverse lg:flex-row gap-0 lg:gap-8  px-2 h-full overflow-hidden ">
            <div className="w-full h-full overflow-hidden flex items-center justify-center  relative">
                <div className="w-full h-fit lg:block hidden  absolute left-4 top-4">
                    <h1 onClick={() => router.push('/')} className="text-white transition-all ease-in-out duration-700 cursor-pointer hover:-translate-y-0.5 font-semibold  text-2xl bg-zinc-800 w-fit rounded-lg p-1">NextUI</h1>
                </div>
                <SparklesPreview />
            </div>
            <div className="w-full rounded-2xl  overflow-hidden relative z-[10] flex flex-col lg:flex-row items-center justify-center h-full shadow-[10px_10px_10px_10px_rgba(0,0,0,0.3)]">
                <div className="w-full block my-5  lg:hidden h-fit  ">
                    <h1 onClick={() => router.push('/')} className="text-white transition-all ease-in-out duration-700 cursor-pointer hover:-translate-y-0.5 font-semibold  text-2xl bg-zinc-800 w-fit rounded-lg p-1">NextUI</h1>
                </div>
                <div className="w-fit h-fit rounded-lg border-[1px] flex flex-col items-center p-8 bg-black/50 backdrop-blur-xs border-neutral-800">
                    <h1 className="text-xl font-bold text-white">Welcome Back Admin</h1>
                    <div className="w-full mt-6 flex flex-col gap-2 h-fit">
                        <label htmlFor="email" className="text-lg font-semibold ">Email</label>
                        <input type="text" name="email" value={credential.email} onChange={handleCredential} id="email" className="border-[0.5px] p-1  border-neutral-800 rounded-sm bg-transparent text-white" />
                    </div>
                    <div className="w-full mt-6 flex flex-col gap-2 h-fit">
                        <label htmlFor="password" className="text-lg font-semibold ">Password</label>
                        <input type="password" name="password" value={credential.password} onChange={handleCredential} id="password" className="border-[0.5px] p-1 border-neutral-800 rounded-sm bg-transparent text-white" />
                    </div>
                    <div className="mt-8 w-full h-fit flex items-center cursor-pointer justify-center hover:-translate-y-0.5 transition-all duration-1000 ease-in-out">
                        {
                            loading === null?<ButtonBorder onClick={() => { AdminAuthorization() }} className={`px-4 py-1  text-lg font-semibold`}>
                            Log In
                        </ButtonBorder>:
                        <ButtonBorder  className={`px-4 py-1 cursor-not-allowed text-lg font-semibold`}>
                            {loading}
                        </ButtonBorder>
                        }
                        
                    </div>
                </div>
                <GridColumns />
            </div>
        </div>
        <Toaster position="top-right"/>
    </section>
}


const GridColumns = () => {
    const columns = 42
    const rows = 11
    return <div className="flex  bg-gray-100 absolute inset-0 z-[-1] dark:bg-neutral-900 shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
        {
            Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: columns }).map((element, colum) => {
                    const index = row * columns + colum - 1
                    return <div key={`${colum}-${row}`} className={`w-10 h-10 flex shrink-0 rounded-[2px] ${index % 2 === 0 ? "bg-neutral-950" : "bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"}`}>
                    </div>
                })
            )}
    </div>
}