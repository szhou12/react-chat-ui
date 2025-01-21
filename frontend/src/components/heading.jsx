import { cn } from "../utils"

// HeadingProps
//  title: string
//  description: string
//  icon: LucideIcon
//  iconColor?: string
//  bgColor?: string
export const Heading = ({ 
    title, 
    description, 
    icon: Icon, 
    iconColor, 
    bgColor 
}) => {
    return (
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                <Icon className={cn("w-10 h-10", iconColor)} />
            </div>
            <div className="flex flex-col gap-y-1 text-left">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}

