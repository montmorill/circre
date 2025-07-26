import { cn } from "@/lib/utils";
import Image from "next/image";

export interface MessageProps {
    role: "user" | "assistant";
    content: string;
}

export default function Message({ role, content }: MessageProps) {
    return (
        <div className={cn("flex leading-7 font-sm items-start", role === "user" ? "justify-end" : "justify-start")}>
            {
                role === 'assistant' &&
                <Image className="border rounded-full h-8 w-8 p-0.5 mr-2" src="/circre.svg" alt="circle" width={24} height={24} />

            }
            <div className={cn(role === "user"
                ? "w-[55%] py-2 px-3 rounded-2xl bg-[#efefef]"
                : "w-[80%]")}>
                {content}
            </div>
        </div >
    )
}
