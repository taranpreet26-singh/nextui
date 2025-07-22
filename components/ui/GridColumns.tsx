
export default function GridColumns(){
    const columns = 41
    const rows = 11
    return <div className="flex bg-gray-100 absolute inset-0 z-[-1] dark:bg-neutral-900 shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
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