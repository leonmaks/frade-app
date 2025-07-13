import { Separator } from "@/shared/shadcn-ui/separator"

import { MainSection } from "./main-section"
import { PersonalSection } from "./personal-section"

export const SidebarContent = () => {
  return (
    <>
      <MainSection />
      <Separator />
      <PersonalSection />
    </>
  )
}
