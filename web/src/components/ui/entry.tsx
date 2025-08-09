import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export default function Entry({ className, ...props }: ComponentProps<"input">) {
    return (
        <input
            type="text"
            className={cn("outline-none", className)}
            {...props}
        />
    )
}
