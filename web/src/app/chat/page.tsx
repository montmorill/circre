"use client"

import Image from "next/image";
import { ChevronDown, CircleArrowUp, Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import Message, { MessageProps } from "./message";
import Palette, { PaletteProps } from "./palette";
import { cn } from "@/lib/utils";
import Sidebar from "../sidebar";

export default function Chat({ session }: { session: string }) {
    const [title, setTitle] = useState<string>("海岛民居建筑改造材料推荐");
    const [placeholder, setPlaceholder] = useState<string>("Tell CirCre your design idea\nThen a material recommendation is ready for you!");
    const [messages, setMessages] = useState<MessageProps[]>([
        { role: "user", content: "我不想要太笨重难运输的材料，而且海岛环境比较潮湿，我需要墙面材料不容易发霉，同时由于居住在屋内的是老人，需要安静的环境，墙面需要有较好的隔音效果。", },
        { role: "assistant", content: "好的，在以上回答的基础上对墙面添加“轻型”、“防霉性”、“隔音性能”的要求，根据筛选以下是符合要求的材料：0002、0007，由相关程度从左到右按序排列，点击材料加入收藏夹，进一步了解材料相关信息请点击材料下方【Detail】了解，也可选择比较模式，由我进一步为您分析！" }
    ]);
    const [completed, setCompleted] = useState<boolean>(true);
    const [palettes, setPalettes] = useState<PaletteProps[]>([
        { primary: "#D9D9D9", secondary: "#4C86A0" },
        { primary: "#D9D9D9", secondary: "#954B2D" },
        { primary: "#D9D9D9", secondary: "#F0A451" },
    ]);

    const prompt = useRef<HTMLTextAreaElement>(null);
    function sendMessage() {
        if (prompt.current && prompt.current.value) {
            const content = prompt.current.value;
            setMessages([...messages, { role: "user", content }]);
            prompt.current.value = "";
        }
    }

    return (
        <div className="flex w-full h-screen">
            <Sidebar />
            <main className="h-full w-full overflow-hidden flex flex-col px-8">
                <header className="mt-6 flex justify-center items-center">
                    <div className="pb-6 flex items-center gap-2">
                        <span>{title}</span>
                        <ChevronDown height={24} />
                    </div>
                </header>
                <div className="flex-1 flex flex-col gap-4 justify-start overflow-y-auto">
                    {messages.map((props, index) => <Message key={index} {...props} />)}
                </div>
                <div className="m-8 pt-1 pl-0.5 pb-2 pr-2 bg-[#efefef] rounded-2xl min-h-35 flex flex-col">
                    <Textarea ref={prompt} placeholder={placeholder} className="placeholder:opacity-50 pb-2 flex-1" />
                    <div className="flex justify-between">
                        <div className="flex gap-2 pl-1.5">
                            <button type="button" title="send" onClick={() => setCompleted(true)} className={cn(
                                "text-[#604B40] px-3 py-1 rounded-2xl flex items-center gap-2",
                                completed ? "bg-[#D2DDE4]" : "bg-white"
                            )}>
                                <Image src="/icons/complete.svg" alt="" width={14} height={14} />
                                Complete&nbsp;Set
                            </button>
                            <button type="button" title="send" onClick={() => setCompleted(false)} className={cn(
                                "text-[#3D3935] px-3 py-1 rounded-2xl flex items-center gap-2",
                                completed ? "bg-white" : "bg-[#D2DDE4]"
                            )}>
                                <Image src="/icons/option.svg" alt="" width={6} height={6} />
                                Element&nbsp;Options
                            </button>
                        </div>
                        <button type="button" title="send" onClick={sendMessage}>
                            <CircleArrowUp height={24} />
                        </button>
                    </div>
                </div>
            </main>
            <aside className="flex flex-col bg-[#efefef]">
                <div className="flex justify-between bg-[#615e5a] text-white px-1.5 py-0.5">
                    <Star width={16} />
                    <ChevronDown width={16} />
                </div>
                <div className="flex-1 flex flex-col items-center py-6 gap-6">
                    {palettes.map((props, index) => <Palette key={index} {...props} />)}
                </div>
                <button type="button" className="bg-[#3d3935] text-white m-3 px-3 py-2 rounded-2xl">
                    confirm&nbsp;&amp;&nbsp;get!
                </button>
            </aside>
        </div>)
}