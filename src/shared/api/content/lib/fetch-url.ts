import { URLFetchError } from "@/shared/lib/errors"

export const fetchUrl = async (
  url: string,
  authToken?: string
) => {
  const res = await fetch(url, {
    headers: {
      ...(authToken && authToken.length ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  })

  if (!res.ok) {
    throw new URLFetchError(
      `Fetch failed from '${url}': ${res.statusText}(${res.status})`,
      { url, statusCode: res.status, statusText: res.statusText }
    )
  }

  return await res.text()
}
