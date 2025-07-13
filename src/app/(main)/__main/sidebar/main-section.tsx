"use client"

import Link from "next/link"
import {
  FlameIcon,
  HomeIcon,
  ListTodoIcon,
  NotebookPenIcon,
  PencilRulerIcon,
  PlaySquareIcon
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/shared/shadcn-ui/sidebar"

const items = [
  { title: "Home", url: "/", icon: HomeIcon },
  { title: "EA Repository", url: "/ea-repo", icon: PencilRulerIcon },
  { title: "Work Papers", url: "/wrk-papers", icon: NotebookPenIcon },
  { title: "Tasks", url: "/tasks", icon: ListTodoIcon },
  { title: "Subscriptions", url: "/feed/subsriptions", icon: PlaySquareIcon, auth: true },
  { title: "Trending", url: "/feed/trending", icon: FlameIcon },
]

export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // TODO: Change to look at current pathname
                onClick={() => {}} // TODO: Do something on click
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
