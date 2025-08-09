"use client"

import Entry from "@/components/ui/entry";
import { ALL_CIRCRES } from "@/lib/data";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function SignUp() {
    const platforms = ["google", "facebook", "instagram", "linkedin"]
    const circres: [typeof ALL_CIRCRES[number], number, string, string, string][] = [
        ["coconut", 235, "45%", "5%", "115deg"],
        ["egg", 335, "15%", "10%", "135deg"],
        ["ladybug", 170, "50%", "35%", "25deg"],
        ["seed", 320, "5%", "60%", "15deg"],
        ["seashell", 750, "50%", "90%", "30deg"],
        ["blackbean", 335, "5%", "95%", "-15deg"],
    ]

    const [scale, setScale] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setScale(window.innerWidth / 1600);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    });

    return (
        <div className="w-full h-screen flex overflow-hidden relative">
            <div className="w-[40%] bg-[#E3DBCA] relative">
                {circres.map(([circre, size, left, top, rotate]) => (
                    <div key={circre} className="translate-x-[-50%] translate-y-[-50%]" style={{
                        position: "absolute",
                        left, top, rotate,
                        width: `${size}px`,
                        transform: `scale(${scale})`
                    }} >
                        <Image src={`/circres/${circre}.svg`} alt="" width={size} height={size} />
                    </div>
                ))}
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-16">
                <h2 className="text-4xl font-bold">Create Account</h2>
                <form className="flex flex-col gap-4 w-8/12">
                    <Entry className="bg-[#EFEFEF] p-4 rounded-2xl w-full" placeholder="Name" />
                    <Entry className="bg-[#EFEFEF] p-4 rounded-2xl w-full" placeholder="Email Address" />
                    <Entry className="bg-[#EFEFEF] p-4 rounded-2xl w-full" placeholder="Password" />
                    <label className="text-sm m-2">
                        <input type="checkbox" className="mr-2" />
                        I agree to the <a className="underline">Terms of Service</a> and <a className="underline">Privacy Policy</a>.
                    </label>
                    <button type="submit" className="bg-[#F0A451] p-2 w-64 rounded-full self-center">Sign Up</button>
                </form>
                <div className="flex justify-center items-center gap-4
                    before:w-48 before:h-0.5 before:inline-block before:bg-black
                    after:w-48 after:h-0.5 after:inline-block after:bg-black">Or Sign Up With</div>
                <ul className="flex justify-center items-center gap-12">
                    {platforms.map((platform) => (
                        <li key={platform}>
                            <Image src={`/icons/${platform}.svg`} alt={platform} width={32} height={32} />
                        </li>
                    ))}
                </ul>
                <div>Already have an account? <a className="underline">Sign in</a></div>
            </div>
        </div>
    )
}
