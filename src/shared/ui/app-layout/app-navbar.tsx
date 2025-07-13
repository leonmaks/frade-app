import { ReactNode } from "react"
import Link from "next/link"

import { SidebarTrigger } from "@/shared/shadcn-ui/sidebar"

import { AppLogo } from "./app-logo"

type AppNavbarProps = {
  navbarContent?: ReactNode
  showSidebarTrigger?: boolean
  actions?: ReactNode
  authButton?: ReactNode
  logoImage?: ReactNode
  logoImageSrc?: string
  logoTitle?: ReactNode
  logoTitleText?: string
}

export const AppNavbar = async ({
  navbarContent,
  showSidebarTrigger = false,
  actions,
  authButton,
  logoImage,
  logoImageSrc,
  logoTitle,
  logoTitleText
}: AppNavbarProps) => {
  // const func__ = "AppNavbar"

  // console.log(func__, "Props", { logoTitleText })

  return (
    <div className="flex items-center gap-4 w-full">

      {/* Menu & Logo */}
      <div className="flex items-center flex-shrink-0">

        {/* Sidebar Trigger */}
        {showSidebarTrigger && <SidebarTrigger />}

        <Link href="/">
          <AppLogo
            logoImage={logoImage}
            logoImageSrc={logoImageSrc}
            logoTitle={logoTitle}
            logoTitleText={logoTitleText}
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center mx-auto">

        {/* Navbar Content */}
        {navbarContent}
      </div>

      <div className="flex-shrink-0 items-center flex gap-4">
        {actions}
        {authButton === undefined ? (
          // TODO: Implement simple AuthButton
          <div>
            SimpleAuthButton!
          </div>
        ) : authButton}
      </div>
    </div >
  )
}
