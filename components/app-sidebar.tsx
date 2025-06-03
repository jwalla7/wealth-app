"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Life Events",
      url: "/dashboard/life-events",
      icon: IconListDetails,
    },
    {
      title: "Cash",
      url: "/dashboard/cash",
      icon: IconChartBar,
    },
    {
      title: "Cryptocurrency",
      url: "/dashboard/cryptocurrency",
      icon: IconFolder,
    },
    {
      title: "Other Property",
      url: "/dashboard/other-property",
      icon: IconUsers,
    },
    {
      title: "Real Estate",
      url: "/dashboard/real-estate",
      icon: IconUsers,
    },
    {
      title: "Brokerage",
      url: "/dashboard/brokerage",
      icon: IconUsers,
    },
  ],
}

import type { User } from "next-auth"

export function AppSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: User | undefined }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* NAV LOGO */}
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">DEMO</span>
              </a>
            </SidebarMenuButton>


          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>



        {/* NAV MAIN DATA  left side tabs*/}
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* NAV USER DATA  bottom right corner*/}
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
