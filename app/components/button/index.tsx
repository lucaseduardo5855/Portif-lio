import { cn } from "@/app/lib/utils"
import { HtmlHTMLAttributes } from "react"

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props}: ButtonProps) => {
    return (
        <button className={cn(
        'bg-emerald-600 flex justify-center px-4 py-3 rounded-lg text-gray-50 items-center gap-2 mt-5 hover:bg-emerald-500 transition-all disabled:opacity-0'
        )}
        {...props}
        >
        {children}
        </button>
    )
}