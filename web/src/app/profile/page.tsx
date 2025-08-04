"use client";

import { CirclePlus, LogOut } from "lucide-react";
import Sidebar from "../sidebar";
import Image from "next/image";
import { useState } from "react";
import { CIRCRES } from "@/lib/data";
import { Textarea } from "@/components/ui/textarea";
import Portfolio from "./portfolio";

export default function Profile() {
    const name = "Dorothy多罗茜"
    const [avatar, setAvatar] = useState<typeof CIRCRES[number]>("ladybug");

    return (
        <div className="flex w-full h-screen">
            <Sidebar className="fixed left-0 top-0 h-screen" />
            <div className="flex-1 ml-24">
                <div className="p-6 pb-0 flex w-[calc(100%-6rem)] justify-between fixed">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <LogOut />
                </div>
                <div className="relative">
                    <div className="absolute inset-0 z-[-100] opacity-30 bg-cover bg-no-repeat bg-center" style={{
                        backgroundImage: `url(/background.jpg)`,
                        clipPath: "url(#combinedClip)",
                    }}>
                        <svg width="0" height="0">
                            <defs>
                                <clipPath id="combinedClip" clipPathUnits="objectBoundingBox">
                                    <polygon points="0,0.2 0,1 1,1 1,0.2" />
                                    <ellipse cx="0.5" cy="0.3" rx="0.8" ry="0.2" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center mt-16">
                        <div className="bg-[#e3dbca] rounded-full p-4 aspect-square">
                            <Image src={`/circre/${avatar}.svg`} alt="Profile" width={200} height={200} className="relative top-7" />
                        </div>
                        <CirclePlus className="float relative bottom-12 left-22 opacity-50" width={36} height={36} />
                        <div className="w-48 text-center mt-[-1.5rem] text-[#3D3935] bg-white px-3 py-2 rounded-full">{name}</div>
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-6 *:w-[70vw]">
                        <div className="flex gap-8">
                            <div className="flex-1"></div>
                            <div className="flex-1 ml-8 font-medium text-2xl text-[#3D3935]">About me</div>
                        </div>
                        <div className="mt-[-.25rem] flex items-stretch text-[#5E5652] gap-8">
                            <div className="flex-1">
                                <div className="bg-[#fffc] flex flex-col p-8 gap-12 rounded-4xl">
                                    <label>Location:&nbsp;<input type="text" /></label>
                                    <label>Nation:&nbsp;<input type="text" /></label>
                                    <label>Company:&nbsp;<input type="text" /></label>
                                    <label>Job:&nbsp;<input type="text" /></label>
                                    <label>Education:&nbsp;<input type="text" /></label>
                                    <label>Contact:&nbsp;<input type="text" /></label>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-4">
                                <Textarea className="bg-[#fffc] flex-2 flex flex-col p-6 rounded-4xl" />
                                <div className="ml-4 font-medium text-2xl text-[#3D3935]">Choose your Circre</div>
                                <div className="bg-[#604B4080] flex justify-between p-6 pt-8 rounded-4xl">
                                    {CIRCRES.map((circre) =>
                                        <Image
                                            src={`/circre/${circre}.svg`}
                                            alt={circre} width={64} height={64}
                                            key={circre} className="cursor-pointer"
                                            onClick={() => setAvatar(circre)}
                                        />)}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="ml-8 font-medium text-2xl text-[#3D3935]">Portfolio</div>
                            <div className="flex gap-8 justify-between *:flex-1">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <Portfolio key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
