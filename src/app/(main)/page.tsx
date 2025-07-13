import { Suspense } from "react"

import { env } from "@/shared/config/env"
import { ReactQueryCacheStrategy } from "@/shared/api/content/lib/query-cache-strategy"
import {
  fetchRepoContent,
  // RepoFileType
} from "@/shared/api/content/fetch-repo-content"

import { RepoNav } from "@/features/repo/ui/repo-nav"
// import { useWspStore } from "@/features/store/WspProvider"

const reactQueryCacheStrategy = new ReactQueryCacheStrategy()
// const dummyQueryCacheStrategy = new DummyQueryCacheStrategy()

export default function HomePage() {
  // const func__ = "HomePage"

  const repoPromise = fetchRepoContent(reactQueryCacheStrategy)


  // const count = useWspStore(state => state.count)
  // console.log(func__, { count })

  return (
    <>
      <h1>Repo: {env.CONTENT_URL}</h1>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <RepoNav repoPromise={repoPromise} />
      </Suspense>
    </>
  )
}
