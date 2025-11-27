import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative space-y-8", className)} {...props}>
        {children}
      </div>
    )
  }
)
Timeline.displayName = "Timeline"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isLast?: boolean
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, isLast = false, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative flex gap-4", className)} {...props}>
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          {/* {!isLast && (
            <div className="absolute top-8 left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" />
          )} */}
        </div>
        <div className="flex-1 ">{children}</div>
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

const TimelineContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("space-y-1", className)} {...props} />
  }
)
TimelineContent.displayName = "TimelineContent"

export { Timeline, TimelineItem, TimelineContent }
