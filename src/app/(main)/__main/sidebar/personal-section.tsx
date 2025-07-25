"use client"

import Link from "next/link"
import {
  HistoryIcon,
  ListVideoIcon,
  ThumbsUpIcon,
  TrashIcon
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/shared/shadcn-ui/sidebar"

const items = [
  { title: "History", url: "/playlists/history", icon: HistoryIcon, auth: true },
  { title: "Liked Videos", url: "/playlists/liked", icon: ThumbsUpIcon, auth: true },
  { title: "All Playlists", url: "/playlists", icon: ListVideoIcon, auth: true },
  { title: "Trash", url: "/", icon: TrashIcon }
]

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
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
