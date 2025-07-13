import {
  PropsWithChildren,
  Suspense
} from "react"

import { HorizontalResizablePanels } from "@/shared/ui/panels/horizontal-resizable-panels"
import { fetchRepoContent } from "@/shared/api/content/fetch-repo-content"
import { ReactQueryCacheStrategy } from "@/shared/api/content/lib/query-cache-strategy"

import { RepoNav } from "@/features/repo/ui/repo-nav"

const reactQueryCacheStrategy = new ReactQueryCacheStrategy()
// const dummyQueryCacheStrategy = new DummyQueryCacheStrategy()

type EaRepoHomeLayoutProps = PropsWithChildren

export default function EaRepoHomeLayout({
  children
}: EaRepoHomeLayoutProps) {

  const repoPromise = fetchRepoContent(reactQueryCacheStrategy)

  return (
    <HorizontalResizablePanels
      leftPanel={
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <RepoNav repoPromise={repoPromise} />
        </Suspense>}
    >
      {children}
    </HorizontalResizablePanels>
  )
}
