import { cn } from "@/lib/utils";
import { ChevronLeft, Heart, MessageSquare, PanelLeft, User } from "lucide-react";
import Image from "next/image";

export default function Sidebar({ className }: { className?: string }) {
    return (
        <aside className={cn("flex flex-col justify-between h-full p-6 bg-[#efefef]", className)}>
            <div className="flex flex-col gap-4 justify-center items-center">
                <Image className="mb-2" src="/blackshell.svg" alt="CirCre" width={48} height={48} />
                <PanelLeft width={30} />
                <MessageSquare width={30} />
                <Heart width={30} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <ChevronLeft width={30} />
                <User width={30} />
            </div>
        </aside>
    )
}
