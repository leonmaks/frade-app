import { promises as fs } from "fs"

export const fetchFile = async (
  path: string
) => {
  const fileContent = await fs.readFile(path, "utf8")

  // if (!res.ok) {
  //   throw new URLFetchError(
  //     `Fetch failed from '${url}': ${res.statusText}(${res.status})`,
  //     { url, statusCode: res.status, statusText: res.statusText }
  //   )
  // }

  return fileContent
}
