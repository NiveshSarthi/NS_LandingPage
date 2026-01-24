import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
    className?: string
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
    return (
        <div className={cn("space-y-4 mb-12", {
            "text-center": align === "center",
            "text-left": align === "left",
            "text-right": align === "right",
        }, className)}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
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
