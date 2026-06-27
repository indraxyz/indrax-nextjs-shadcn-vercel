"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { SidebarInfo } from "@/components/sections/SidebarInfo"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { RESUME_CONFIG } from "@/constants"
import { getCurrentDateFormatted } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Personal Sheet */}
      <div className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-extrabold uppercase tracking-tight">{RESUME_CONFIG.title}</h1>
            <div className="flex items-center gap-2">
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <Button variant="outline" className="rounded-none border-2 border-foreground font-bold uppercase tracking-widest">
                    <User className="h-5 w-5" />
                    {/* <span>Personal Info</span> */}
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="rounded-none border-l-2 border-foreground w-full sm:max-w-xl">
                  <DrawerHeader className="border-b-2 border-foreground bg-muted/30">
                    <DrawerTitle className="font-extrabold uppercase tracking-tight">Personal Information</DrawerTitle>
                    <DrawerDescription className="text-xs uppercase tracking-widest font-semibold">
                      Summary of my personal details, education, and organizations
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="overflow-y-auto px-4 pb-4 pt-6">
                    <SidebarInfo className="space-y-8" />
                  </div>
                  <DrawerFooter className="border-t-2 border-foreground">
                    <DrawerClose asChild>
                      <Button variant="outline" className="rounded-none border-2 border-foreground font-bold uppercase tracking-widest">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 xl:py-16 print:py-4">
        <HeroSection />

        <div className="space-y-8">
          <ExperienceSection />
          <PortfolioSection />
          <TechStackSection />
        </div>

        {/* Footer */}
        <div className="text-center py-12 mt-12 border-t-2 border-foreground">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            by Indra • updated at {getCurrentDateFormatted()}
          </p>
        </div>
      </div>
    </div>
  )
}
