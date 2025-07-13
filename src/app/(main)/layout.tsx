import {
  PropsWithChildren,
} from "react"

import { ToggleTheme } from "@/shared/ui/theme/toggle-theme"
import { SearchInput } from "@/shared/ui/search/search-input"
import { AppLayout } from "@/shared/ui/app-layout/app-layout"

import { SidebarContent } from "./__main/sidebar/sidebar-content"

type HomeLayoutProps = PropsWithChildren

export default async function HomeLayout({
  children
}: HomeLayoutProps) {

  return (
    <AppLayout
      navbarContent={<SearchInput />}
      sidebarContent={<SidebarContent />}
      // authButton={<AuthButton />}
      actions={<ToggleTheme />}
    // logoTitleText={logoTitleText}
    >
      {children}
    </AppLayout>
  )
}
