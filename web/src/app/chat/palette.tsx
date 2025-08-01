import { CircleX } from "lucide-react";

export interface PaletteProps {
    primary: string;
    secondary: string;
}

export default function Palette({ primary, secondary }: PaletteProps) {
    return (
        <div className="w-22 h-20">
            <div className="w-20 h-20 rounded-md overflow-hidden flex">
                <div className="flex-3 h-full" style={{ background: primary }}></div>
                <div className="flex-1 h-full" style={{ background: secondary }}></div>
            </div>
            <CircleX width={16} className="relative left-20 bottom-24" />
        </div>
    )
}
