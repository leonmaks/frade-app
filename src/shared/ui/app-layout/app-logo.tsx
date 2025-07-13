import { ReactNode } from "react"
import Image from "next/image"

import { cn } from "@/shared/lib/shadcn-ui-utils"

import {
  APP_NAME,
  APP_LOGO_HEIGHT,
  APP_LOGO_IMAGE,
  // APP_LOGO_WIDTH
} from "@/shared/config/defs"

type AppLogoProps = {
  logoImage?: ReactNode
  logoImageSrc?: string
  logoTitle?: ReactNode
  logoTitleText?: string
}

export const AppLogo = ({
  logoImage,
  logoImageSrc,
  logoTitle,
  logoTitleText
}: AppLogoProps) => {
  // const func__ = "AppLogo"

  // console.log(func__, "Props", { logoTitleText })

  return (
    <div className="p-2 flex items-center gap-1">

      {logoImage !== undefined ? logoImage : (
        <Image
          src={logoImageSrc?.length ? logoImageSrc : APP_LOGO_IMAGE}
          alt="AppLogo"
          height="0"
          width="0"
          // className="h-[24px] w-auto"
          style={{
            height: APP_LOGO_HEIGHT,
            width: "auto"
          }}
        // height={APP_LOGO_HEIGHT}
        // width={APP_LOGO_WIDTH}
        />
      )}

      {logoTitle !== undefined ? logoTitle : (
        <p className={cn(
          "text-xl font-semibold",
          // "text-2xl font-semibold tracking-tight",
          // font.className,
        )}
        >
          {logoTitleText?.length ? logoTitleText : APP_NAME}
        </p>
      )}
    </div>
  )
}
