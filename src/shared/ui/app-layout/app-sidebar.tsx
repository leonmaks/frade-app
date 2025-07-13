import { Sidebar, SidebarContent } from "@/shared/shadcn-ui/sidebar"

type AppSidebarProps = {
  sidebarContent: React.ReactNode
}

export const AppSidebar = ({
  sidebarContent,
}: AppSidebarProps) => {
  return (
    <Sidebar className="pt-14 z-40 border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        {sidebarContent}
      </SidebarContent>
    </Sidebar>
  )
}
