"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ProfileAvatarProps {
  src: string
  alt: string
  fallback?: string
  className?: string
  showStatus?: boolean
}

export function ProfileAvatar({
  src,
  alt,
  fallback = "ICE",
  className,
  showStatus = false,
}: ProfileAvatarProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        "group cursor-pointer transition-all duration-300",
        className
      )}
    >
      {/* Outer glow ring */}
      <div
        className={cn(
          "absolute inset-0 rounded-full",
          "bg-linear-to-br from-primary/20 via-primary/10 to-transparent",
          "blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300",
          "scale-110"
        )}
      />

      {/* Gradient border ring */}
      <div
        className={cn(
          "absolute inset-0 rounded-full p-[3px]",
          "bg-linear-to-br from-primary via-primary/80 to-primary/60",
          "opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        )}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </div>

      {/* Avatar container */}
      <div className="relative z-10">
        <Avatar
          className={cn(
            "relative h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-40 lg:w-40",
            "border-2 border-background",
            "shadow-2xl shadow-primary/20",
            "ring-2 ring-primary/10",
            "transition-all duration-300",
            "group-hover:scale-105 group-hover:shadow-primary/30",
            "print:scale-100 print:shadow-none"
          )}
        >
          <AvatarImage
            src={src}
            alt={alt}
            className="object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <AvatarFallback className="text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-br from-primary/10 to-primary/5 text-primary">
            {fallback}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Status indicator - optional */}
      {showStatus && (
        <div
          className={cn(
            "absolute bottom-0 right-0 z-20",
            "h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5",
            "rounded-full border-2 border-background",
            "bg-green-500 shadow-md",
            "hidden sm:block"
          )}
          aria-label="Available"
        />
      )}
    </div>
  )
}
