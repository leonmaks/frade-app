import type { Metadata } from "next"
import localFont from "next/font/local"

import { cn } from "@/shared/lib/shadcn-ui-utils"

import { APP_NAME } from "@/shared/config/defs"
import { ThemeProvider } from "@/shared/ui/theme/theme-provider"

// import WspProvider from "@/features/store/WspProvider"

import "./globals.css"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
})
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    absolute: APP_NAME
  },
  description: "Documents",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-dvh flex flex-col bg-background antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider>
          {/* <WspProvider initialCount={1}> */}
          {children}
          {/* </WspProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
