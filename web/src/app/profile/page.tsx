"use client";

import { CirclePlus, LogOut } from "lucide-react";
import Sidebar from "../sidebar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CIRCRES } from "@/lib/data";
import Textarea from "@/components/ui/textarea";
import Portfolio from "./portfolio";
import Entry from "@/components/ui/entry";

export default function Profile() {
    const detials = ["Location", "Nation", "Company", "Job", "Education", "Contact"];
    const [avatar, setAvatar] = useState<typeof CIRCRES[number]>("ladybug");
    const usernameRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.value = "Dorothy多罗茜";
        }
    }, [usernameRef])

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
                            <Image src={`/circres/${avatar}.svg`} alt="Profile" width={200} height={200} className="relative top-7" />
                        </div>
                        <Entry ref={usernameRef} className="w-48 text-center mt-4 text-[#3D3935] bg-white px-3 py-2 rounded-full" />
                        <CirclePlus className="float relative bottom-26 left-22 opacity-50" width={36} height={36} />
                    </div>
                    <div className="flex flex-col items-center gap-4 *:w-[70vw]">
                        <div className="flex h-[30em] text-[#5E5652] gap-8 *:basis-0">
                            <div className="flex-1 h-full flex flex-col gap-4">
                                <div className="ml-4 font-medium text-2xl text-[#3D3935]">&nbsp;</div>
                                <div className="flex-1 bg-[#fffc] flex flex-col p-8 justify-between rounded-4xl text-lg">
                                    {detials.map((detail) => (
                                        <label key={detail}>
                                            <span>{detail}:</span>
                                            <Entry className="ml-2" />
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 w-[calc(50%-2rem)] h-full flex flex-col gap-4">
                                <div className="ml-4 font-medium text-2xl text-[#3D3935]">About Me</div>
                                <Textarea className="flex-1 flex flex-col bg-[#fffc] p-6 rounded-4xl" wrap="off" />
                                <div className="ml-4 font-medium text-2xl text-[#3D3935]">Choose your CirCre</div>
                                <div className="bg-[#604B4080] flex justify-between p-6 pt-8 rounded-4xl">
                                    {CIRCRES.map((circre) =>
                                        <Image
                                            src={`/circres/${circre}.svg`}
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
