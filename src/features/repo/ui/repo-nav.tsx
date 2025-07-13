"use client"

import { use } from "react"

import { RepoFileType } from "@/shared/api/content/fetch-repo-content"

type RepoNavProps = {
  repoPromise: Promise<RepoFileType | null>
}

export const RepoNav = (
  { repoPromise }: RepoNavProps
) => {
  const repo = use(repoPromise)

  return (
    <div>
      <p>{JSON.stringify(repo, null, 2)}</p>
    </div>
  )
}
