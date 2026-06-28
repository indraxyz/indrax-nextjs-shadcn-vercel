"use client"

import { Button } from "@/components/ui/button"
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
import { SidebarInfo } from "@/features/resume/components/sidebar-info"
import { User } from "lucide-react"

export function PersonalInfoDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="rounded-none border-2 border-foreground font-bold uppercase tracking-widest"
        >
          <User className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full rounded-none border-l-2 border-foreground sm:max-w-xl">
        <DrawerHeader className="border-b-2 border-foreground bg-muted/30">
          <DrawerTitle className="font-extrabold uppercase tracking-tight">
            Personal Information
          </DrawerTitle>
          <DrawerDescription className="text-xs font-semibold uppercase tracking-widest">
            Summary of my personal details, education, and organizations
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto px-4 pb-4 pt-6">
          <SidebarInfo />
        </div>
        <DrawerFooter className="border-t-2 border-foreground">
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="rounded-none border-2 border-foreground font-bold uppercase tracking-widest"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
