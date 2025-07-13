import { REPO_ROOT } from "@/shared/config/defs"
import { env } from "@/shared/config/env"
import { FetchError } from "@/shared/lib/errors"
import {
  pathProtocol,
  pathSplit
} from "@/shared/lib/path-utils"
import {
  isObject,
  objKeyInit,
  ObjKeyType
} from "@/shared/lib/obj-utils"

import {
  QueryCacheStrategy,
} from "./lib/query-cache-strategy"
import { fetchUrl } from "./lib/fetch-url"
import { parseYaml } from "./lib/parse-yaml"
import { fetchFile } from "./lib/fetch-file"

export type RepoFileType = {
  imports?: string[]
}

export const fetchRepoContent = async (
  queryStrategy: QueryCacheStrategy
) => {

  const fetchData = async (
    path: string
  ) => {
    console.log("fetch data")

    const [protocol, pathname] = pathProtocol(path)

    console.log({ protocol, pathname })

    let text, yaml = null
    if (protocol?.startsWith("http")) {
      text = await fetchUrl(path)

    } else if (
      pathname &&
      pathname.length &&
      protocol?.startsWith("local")

    ) {
      text = await fetchFile(pathname)

    } else {
      throw new FetchError("Unsupported protocol", path)
    }

    if (text && text.length) {
      yaml = await parseYaml<RepoFileType>(text)
    }

    return yaml
  }

  const parseRecursiveKeys = (up: object, lvl: number = 0) => {
    const func__ = "parseRecursiveKeys"
    console.log(func__, "props", { up, lvl })

    if (!up) return null

    if (typeof up === "object") {
      for (const [k, v] of Object.entries(up)) {

        console.log(func__, "loop", { k, typeofK: typeof k, v, typeofV: typeof v, lvl })

        if (k === "imports") continue

        switch (k) {
          case "domain":
            const domain = objKeyInit(up, k, v)
          // console.log(func__, { domain })

          default:
            const value = isObject(v) ? parseRecursiveKeys(v, lvl + 1) : v
          // console.log(func__, { k, value })
          // objKeyInit(up, k, v)
        }
      }
    }
  }

  const fetchRecursiveImports = async (
    path: string,
    ctx: Record<ObjKeyType, object> = {}
  ) => {
    const func__ = "fetchRepoContent"

    // console.log(func__, { path })

    const [dir, file] = pathSplit(path)
    // console.log(func__, { d, f })

    const data: RepoFileType | null = await queryStrategy.fetch<RepoFileType>(
      [dir, file],
      () => fetchData(path)
    )
    console.log(func__, "001.01", { data })

    if (data) {
      parseRecursiveKeys(data)
      // for (const [k, v] of Object.entries(data)) {

      //   console.log(func__, "001.2", { k, v })

      //   if (k === "imports") continue

      //   switch (k) {
      //     case "domain":
      //       const domain = objKeyInit(ctx, k, v)
      //       console.log(func__, { domain })
      //   }
      // }

      if (data.imports) {
        for (const imp of data.imports) {
          console.log(func__, { dir, imp })
          await fetchRecursiveImports(`${dir}/${imp}`)
        }
      }
    }

    return data
  }

  // await new Promise(res => setTimeout(res, 5000))

  return fetchRecursiveImports(`${env.CONTENT_URL}/${REPO_ROOT}`)
  //  queryStrategy.fetch(["root"], fetchData)
}
