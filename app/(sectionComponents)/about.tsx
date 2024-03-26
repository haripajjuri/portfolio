import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export default function About(){
    const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem minima nesciunt fuga rem quaerat non unde, blanditiis enim debitis dicta facilis magni quam beatae atque? Libero culpa fugiat quas?
    e numquam molestias cum, consequatur esse.`
    return(
        <div id="about" className="h-[100svh]">
            <div className="flex flex-col h-full justify-center gap-10 pl-7">

            <div className="text-4xl md:text-5xl font-bold tracking-wide">
                About <span className="opacity-40">Me</span>.
            </div>

            <div className="w-[85%] md:w-[65%]  leading-[35px] font-semibold md:leading-[42px] opacity-85  text-[22px] md:text-[23px]">
                {/* <TextGenerateEffect words={words}/> */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem minima nesciunt fuga rem quaerat non unde, blanditiis enim debitis dicta facilis magni quam beatae atque? Libero culpa fugiat quas?
    e numquam molestias cum, consequatur esse.
            </div>

            <div className="mt-6">
                <Link href={"public/Hari_Pajjuri_Resume.pdf"} target="_blank" className="bg-white bg-opacity-15 opacity-80 px-4 pb-3 pt-2 font-semibold tracking-wide rounded-xl">download cv</Link>
            </div>
            </div>
        </div>
    )
}