"use client";

import { CirclePlus, LogOut } from "lucide-react";
import Sidebar from "../sidebar";
import Image from "next/image";
import { useState } from "react";
import { CIRCRES } from "@/lib/data";

export default function Profile() {
    const name = "Dorothy多罗茜"
    const [avatar, setAvatar] = useState<typeof CIRCRES[number]>("coconut");

    return (
        <div className="flex w-full h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <div className="opacity-30 z-[-1] w-[calc(100%-6rem)] h-full fixed">
                    <div className="w-full h-full bg-cover fixed" style={{
                        backgroundImage: "url(/background.jpg)",
                        clipPath: "ellipse(80% 40%)"
                    }} />
                    <div className="w-full h-full bg-cover fixed" style={{
                        backgroundImage: "url(/background.jpg)",
                        clipPath: "polygon(0 50%, 0 100%, 100% 100%, 100% 50%)"
                    }} />
                </div>
                <div className="p-6 flex justify-between">
                    <h1 className="text-2xl font-bold">Profile</h1>
                    <LogOut />
                </div>
                <div className="flex justify-center">
                    <div>
                        <CirclePlus className="relative top-49 left-39 opacity-50 color-[#3D3935]" width={40} height={40} />
                        <div className="bg-[#e3dbca] rounded-full pt-10 p-4 aspect-square">
                            <Image src={`/circre/${avatar}.svg`} alt="Profile" width={160} height={160} />
                        </div>
                        <div className="w-48 text-center mt-4 bg-white px-3 py-2 rounded-full">{name}</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
