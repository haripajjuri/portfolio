"use client"
const scrollto = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

export default function Landing(){
    return(
       <div className="h-[100svh] flex flex-col items-center justify-between py-6">
        <div className="w-full font-bold text-xs md:text-sm">HARI</div>
            <div className="flex flex-col items-center gap-3 my-36">
            <div className="font-semibold text-2xl opacity-30">hey i'm</div>
            <div className="font-caveat font-bold text-7xl md:text-8xl">
                <span>Hari </span>
                <span className="opacity-60">Pajjuri</span>
            </div>
            <div className="font-bold mb-8 opacity-15 tracking-wide text-6xl md:text-9xl">developer</div>
            </div>

            <div className="pb-4 cursor-pointer md:pb-6 " onClick={()=> scrollto("about")}>
            <img width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1"/>
            </div>
       </div>
    )
}