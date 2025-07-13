import { ReactNode } from "react"

import { SidebarProvider } from "@/shared/shadcn-ui/sidebar"

import { AppNavbar } from "./app-navbar"
import { AppSidebar } from "./app-sidebar"
import { ComposeChildren } from "@/shared/lib/react-utils/compose-children"

type AppLayoutProps = {
  navbarContent?: ReactNode
  sidebarContent?: ReactNode
  sidebarDefaultOpen?: boolean
  authButton?: ReactNode
  actions?: ReactNode
  children: ReactNode
  logoImage?: ReactNode
  logoImageSrc?: string
  logoTitle?: ReactNode
  logoTitleText?: string
}

export const AppLayoutContent = async ({
  navbarContent,
  sidebarContent,
  authButton,
  actions,
  children,
  logoImage,
  logoImageSrc,
  logoTitle,
  logoTitleText
}: AppLayoutProps) => (
  <div className="w-full">

    {/* Navbar */}
    <header className="fixed top-0 left-0 right-0 h-14 flex items-center px-2 pr-5 z-50">
      <AppNavbar
        navbarContent={navbarContent}
        showSidebarTrigger={sidebarContent ? true : false}
        authButton={authButton}
        actions={actions}
        logoImage={logoImage}
        logoImageSrc={logoImageSrc}
        logoTitle={logoTitle}
        logoTitleText={logoTitleText}
      />
    </header>

    <div className="flex h-screen pt-14">

      {/* Sidebar */}
      {sidebarContent && <AppSidebar sidebarContent={sidebarContent} />}

      {/* Children */}
      <main
        className="flex-1 overflow-y-auto"
      >
        {children}
      </main>
    </div>
  </div>
)

export const AppLayout = ({
  navbarContent,
  sidebarContent,
  sidebarDefaultOpen = false,
  authButton,
  actions,
  children,
  logoImage,
  logoImageSrc,
  logoTitle,
  logoTitleText
}: AppLayoutProps) => (

  <ComposeChildren>
    {sidebarContent && <SidebarProvider defaultOpen={sidebarDefaultOpen} />}
    <AppLayoutContent
      navbarContent={navbarContent}
      sidebarContent={sidebarContent}
      authButton={authButton}
      actions={actions}
      logoImage={logoImage}
      logoImageSrc={logoImageSrc}
      logoTitle={logoTitle}
      logoTitleText={logoTitleText}
    >
      {children}
    </AppLayoutContent>
  </ComposeChildren>
)
