import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
    className?: string
    inverted?: boolean
}

export function SectionHeader({ title, subtitle, align = "center", className, inverted }: SectionHeaderProps) {
    return (
        <div className={cn("space-y-4 mb-12", {
            "text-center": align === "center",
            "text-left": align === "left",
            "text-right": align === "right",
        }, className)}>
            <h2 className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6",
                inverted ? "text-white" : "text-primary"
            )}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
