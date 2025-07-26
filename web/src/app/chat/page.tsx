"use client"

import Image from "next/image";
import { MessageSquare, PanelLeft, ChevronDown, ChevronLeft, User, CircleArrowUp, Heart } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useRef } from "react";
import Message from "./message";

const placeholder = "Tell CirCre your design idea\nThen a material recommendation is ready for you!"

export default function Chat({ session }: { session: string }) {
    const prompt = useRef<HTMLTextAreaElement>(null);

    function sendMessage() {
        alert("send")
        alert(prompt.current?.value || "")
    }

    return <div className="flex w-full h-screen">
        <aside className="flex flex-col justify-between h-full p-6 bg-[#efefef] ">
            <div className="flex flex-col gap-4 justify-center items-center">
                <Image className="mb-2" src="/circre.svg" alt="circre" width={48} height={48} />
                <PanelLeft width={30} />
                <MessageSquare width={30} />
                <Heart width={30} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <ChevronLeft width={30} />
                <User width={30} />
            </div>
        </aside>
        <main className="h-full w-full overflow-hidden flex flex-col px-8">
            <header className="mt-4 flex justify-center items-center">
                <div className="pb-2 flex items-center gap-2">
                    <span>海岛民居建筑改造材料推荐</span>
                    <ChevronDown height={24} />
                </div>
            </header>
            <div className="flex-1 flex flex-col gap-4 justify-start overflow-y-auto">
                {/* Message */}
                <Message role="user" content="我不想要太笨重难运输的材料，而且海岛环境比较潮湿，我需要墙面材料不容易发霉，同时由于居住在屋内的是老人，需要安静的环境，墙面需要有较好的隔音效果。" />
                <Message role="assistant" content="好的，在以上回答的基础上对墙面添加“轻型”、“防霉性”、“隔音性能”的要求，根据筛选以下是符合要求的材料：0002、0007，由相关程度从左到右按序排列，点击材料加入收藏夹，进一步了解材料相关信息请点击材料下方【Detail】了解，也可选择比较模式，由我进一步为您分析！" />
            </div>
            <div className="m-8 p-2 pl-1 bg-[#efefef] rounded-2xl">
                <Textarea ref={prompt} placeholder={placeholder} className="placeholder:opacity-50 pb-0" />
                <div className="flex justify-end">
                    <button type="button" title="send" onClick={sendMessage}>
                        <CircleArrowUp height={24} />
                    </button>
                </div>
            </div>
        </main>
    </div>
}