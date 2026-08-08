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
      <div
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-full bg-avatar-halo",
          "opacity-90 transition duration-300 group-hover:scale-110 group-hover:opacity-100"
        )}
      />

      <div
        className={cn(
          "absolute -inset-[5px] rounded-full bg-matte-gradient-animated",
          "opacity-95 shadow-[0_0_0_2px_var(--semantic-border-strong),0_14px_32px_-18px_var(--component-avatar-ring-shadow)] transition duration-300 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]"
        )}
      />

      <div className="relative z-10">
        <Avatar
          className={cn(
            "relative h-24 w-24 border-2 border-background bg-card sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-40 lg:w-40",
            "shadow-[0_10px_26px_-18px_var(--component-avatar-ring-shadow)]",
            "transition duration-300 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]",
            "print:scale-100 print:shadow-none"
          )}
        >
          <AvatarImage
            src={src}
            alt={alt}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <AvatarFallback className="variant-primary bg-[var(--variant-soft)] text-lg font-bold text-[var(--variant-border)] sm:text-xl md:text-2xl">
            {fallback}
          </AvatarFallback>
        </Avatar>
      </div>

      {showStatus && (
        <div
          className={cn(
            "variant-tertiary absolute bottom-0 right-0 z-20 hidden rounded-full border border-background bg-[var(--variant-bg)] shadow-soft-sm sm:block",
            "h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
          )}
          aria-label="Available"
        />
      )}
    </div>
  )
}
