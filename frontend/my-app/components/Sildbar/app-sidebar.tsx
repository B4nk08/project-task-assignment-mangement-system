"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
     {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
    },
    {
      title: "Member",
      url: "#",
      icon: Bot,
    },
    {
      title: "My Project",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Inprogress",
          url: "#",
        },
        {
          title: "Completed Tasks",
          url: "#",
        },
        {
          title: "Pending Approval",
          url: "#",
        },
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>LOGO
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
