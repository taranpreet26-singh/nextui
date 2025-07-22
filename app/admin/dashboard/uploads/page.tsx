"use client"
import Navbar from "@/components/Navbar";
import { ButtonBorder } from "@/components/ui/Button";
import { Pencil, Trash, Upload } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";
import GridColumns from "@/components/ui/GridColumns";
type Component = {
    image: string,
    name: string,
    shortInfo: string
}


export default function UploadComponent() {
    const fileRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File | null>(null)
    const onFileClick = () => {
        fileRef.current?.click()
    }
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log("Dropped files:", acceptedFiles);
        setFile(acceptedFiles[0])
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            "image/*": []
        }
    });
    const [refresh, setRefresh] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    const [fileUpdate, setFileUpdate] = useState<string | null>(null)
    const [name, setName] = useState<string>("")
    const [shortInfo, setShortInfo] = useState<string>("")
    const [loading, setLoading] = useState<string | null>(null)
    const [allComponent, setAllComponent] = useState<Component[] | null>(null)
    async function fetchAllComponent() {
        try {
            const response = await axios.get("/api/admin/uploads")
            console.log(response.data.msg)
            setAllComponent(response.data.msg)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllComponent()
    }, [refresh])


    async function uploadComponent() {
        try {
            setLoading("Loading....")
            if ((file || fileUpdate) && name != "" && shortInfo != "") {
                const formData = new FormData()
                if (update && fileUpdate) {
                    formData.append("stringFile", fileUpdate)
                } else if (!update && file) {
                    formData.append("file", file)
                }
                formData.append("name", name)
                formData.append("shortInfo", shortInfo)
                const response = await axios.post('/api/admin/uploads', formData)
                console.log(response)
                toast.success(response.data.msg)
            } else {
                console.log()
                toast.error("Please fill all the fields")
            }
        } catch (error) {
            console.log(error)
            toast.error("Some Error Occur")
        } finally {
            setLoading(null)
            setRefresh(true)
        }
    }

    async function deleteComponent() {
        try {
            alert("process beign")
            if (name) {
                const response = await axios.delete('/api/admin/uploads', {
                    data: { name }
                })

                if (response.status) {
                    toast.success(response.data.msg)
                } else {
                    toast.error(response.data.msg)
                }
            }
        } catch (error) {
            toast.error("Error")
        } finally {
            setRefresh(true)
        }
    }
    return <section className="px-4 lg:px-10 mx-auto lg:container  max-w-full h-fit overflow-hidden">
        <Navbar className="" />
        <div className="w-full py-20 rounded-2xl relative z-[10] flex  justify-center h-full ">
            <div className="w-full h-full rounded-lg border-[1px] flex flex-col items-center p-4 lg:p-8 bg-black/50 backdrop-blur-xs border-neutral-800">
                <h1 className="text-xl font-bold text-white">Upload Latest Component / Update Component</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full ">
                    <div {...getRootProps()} onClick={onFileClick} className="w-full group rounded-lg flex items-center justify-center relative overflow-hidden  mt-6 p-4 flex-col gap-2 max-h-[30rem] min-h-[18em]">
                        <label htmlFor="file" className="text-lg font-semibold ">Upload Image</label>
                        {
                            file ? "" : <p className="text-xs text-white/70">
                                {isDragActive
                                    ? "Drop the files here ..."
                                    : "Drag and drop files here, or click to select"}
                            </p>
                        }
                        {
                            update && <div className="w-3/4 h-fit flex">
                                <div className="w-full h-fit rounded-sm overflow-hidden bg-white">
                                    <Image width={100} height={100} alt={fileUpdate!} className="w-full h-full object-contain" src={fileUpdate!} />
                                </div>
                            </div>
                        }
                        {
                            !update &&
                            <div className="h-full w-full flex items-center justify-center ">
                                {
                                    file ?
                                        <div className="w-3/4 h-fit flex">
                                            <div className="w-full h-fit rounded-sm overflow-hidden bg-white">
                                                <Image width={100} height={100} alt={file.name} className="w-full h-full object-contain" src={URL.createObjectURL(file)} />
                                            </div>
                                        </div>
                                        :
                                        <div className="w-1/2  relative h-1/2">
                                            <div className=" absolute inset-0  border-dashed border-[0.5px] border-zinc-700  rounded-lg">
                                            </div>
                                            <div className="absolute flex items-center justify-center w-full h-full left-4 top-4 transition-all ease-in-out duration-500 group-hover:inset-0  bg-zinc-800/70 drop-shadow-2xl p-[1px]  rounded-lg">
                                                <Upload size={14} />
                                            </div>
                                        </div>
                                }
                            </div>
                        }
                        <input {...getInputProps()} type="file" name="file" id="file" ref={fileRef} className="" />
                        <GridColumns />
                    </div>
                    <div className="w-full h-full">
                        <div className="w-full mt-6 flex flex-col gap-2 h-fit">
                            <label htmlFor="name" className="text-lg font-semibold ">Name</label>
                            {
                                update ?
                                    <input type="text" name="name" id="name" value={name} disabled onChange={(e) => { setName(e.target.value) }} className="border-[0.5px] p-1 cursor-not-allowed  border-neutral-800 rounded-sm bg-transparent text-white" />
                                    :
                                    <input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} className="border-[0.5px] p-1  border-neutral-800 rounded-sm bg-transparent text-white" />
                            }
                        </div>
                        <div className="w-full mt-6 flex flex-col gap-2 h-fit">
                            <label htmlFor="shortInfo" className="text-lg font-semibold ">Short Info</label>
                            <textarea rows={14} name="shortInfo" value={shortInfo} onChange={(e) => { setShortInfo(e.target.value) }} id="shortInfo " className="border-[0.5px] p-1 border-neutral-800 rounded-sm bg-transparent text-white" />
                        </div>
                    </div>
                    {
                        file &&
                        <div className="w-fit  rounded-b-sm h-fit flex gap-4  lg:flex-row flex-col text-white p-2 text-xs">
                            <span className="bg-zinc-900 w-fit rounded-full p-1 text-sm flex items-center justify-between font-semibold">Name  {" "}<span className="bg-zinc-700 text-xs p-1 font-medium ml-1 rounded-full"> {file.name}</span></span>
                            <span className="bg-zinc-900 w-fit rounded-full p-1 flex items-center justify-between text-sm font-semibold">Size {" "} <span className="bg-zinc-700 p-1 text-xs font-medium ml-1 rounded-full"> {(file.size / (1024 * 1024)).toFixed(2)}MB</span></span>
                            <span className="bg-zinc-900 w-fit rounded-full p-1 flex items-center justify-between text-sm font-semibold">Type {" "} <span className="bg-zinc-700 p-1 text-xs font-medium ml-1 rounded-full"> {file.type}</span></span>
                        </div>
                    }
                </div>
                <div className="mt-8 w-full h-fit flex items-center cursor-pointer justify-center hover:-translate-y-0.5 transition-all duration-1000 ease-in-out">
                    {
                        loading === null ? <ButtonBorder onClick={() => { uploadComponent() }} className={`px-4 py-1  text-lg font-semibold`}>
                            Upload
                        </ButtonBorder> :
                            <ButtonBorder className={`px-4 py-1 cursor-not-allowed text-lg font-semibold`}>
                                {loading}
                            </ButtonBorder>
                    }
                </div>
            </div>
        </div>
        <div className="mt-10 py-20">
            <h1 className="text-3xl font-bold">All Component</h1>

            {
                !allComponent ? <motion.div className="w-full h-full flex items-center justify-center">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-tabler-loader animate-spin"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6l0 -3" />
                        <path d="M16.25 7.75l2.15 -2.15" />
                        <path d="M18 12l3 0" />
                        <path d="M16.25 16.25l2.15 2.15" />
                        <path d="M12 18l0 3" />
                        <path d="M7.75 16.25l-2.15 2.15" />
                        <path d="M6 12l-3 0" />
                        <path d="M7.75 7.75l-2.15 -2.15" />
                    </motion.svg>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                        className="text-lg font-medium tracking-wide"
                    >
                        Loading, please wait...
                    </motion.p>
                </motion.div> : <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  min-h-[30rem]">
                    {
                        allComponent?.map((element, index) => {
                            return <CardComponent onDelete={() => { setName(element.name); deleteComponent() }} onEdit={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setUpdate(true); setName(element.name); setShortInfo(element.shortInfo); setFileUpdate(element.image) }} image={element.image} name={element.name} shortInfo={element.shortInfo} key={index} />
                        })
                    }
                </div>
            }


        </div>
        <Toaster position="top-right" />
    </section>
}



const CardComponent = ({ image, name, shortInfo, onEdit, onDelete }: { onEdit?: () => void, onDelete?: () => void, image: string, name: string, shortInfo: string }) => {
    const router = useRouter()
    return <div onClick={() => { router.push(`/components/${name.replaceAll(" ", "-")}`) }} className="w-full lg:w-[25rem] my-5 cursor-pointer  lg:m-4 p-2  h-full">
        <div onClick={(e) => { e.stopPropagation() }} className="px-2 flex items-center justify-end w-full gap-4 pb-2">
            <div onClick={onEdit} className="relative group">
                <Pencil size={20} className="cursor-pointer" />
                <motion.span
                    className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-black rounded">
                    Update
                </motion.span>
            </div>

            <div onClick={onDelete} className="relative group">
                <Trash size={20} className="cursor-pointer" />
                <span className="absolute bottom-full mb-1 hidden group-hover:flex px-2 py-1 text-xs text-white bg-black rounded">
                    Delete
                </span>
            </div>
        </div>
        <div className="w-full h-[20rem] rounded-lg border-[0.5px] p-2 border-neutral-800">
            <Image src={image} className="w-full h-full object-contain" alt="component-img" width={500} height={500} />
        </div>
        <div className="text-2xl font-bold p-2">{name}</div>
        <p className="text-white/80 text-sm p-2">{shortInfo}</p>
    </div>
}