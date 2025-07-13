import { cache } from "react"

import { REPO_ROOT } from "@/shared/config/defs"
import { env } from "@/shared/config/env"
import { fetchUrl } from "@/shared/api/content/lib/fetch-url"
import { parseYaml } from "@/shared/api/content/lib/parse-yaml"
import { Manifest } from "@/shared/api/content/schemas/manifest.schema"
import manifestSchema from "@/shared/api/content/schemas/manifest.schema.json"

class Repo {

  getRepo = cache(async (): Promise<unknown[]> => {
    const text = await fetchUrl(
      `${env.CONTENT_URL}/${REPO_ROOT}`
    )

    console.log({ text })

    const manifest = await parseYaml<Manifest>(text, manifestSchema)

    console.log({ manifest })

    return []
  })
}

export const repo = new Repo()
