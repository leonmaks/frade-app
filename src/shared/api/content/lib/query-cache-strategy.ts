import { QueryClient } from "@tanstack/react-query"

import { QUERY_CACHE_REFETCH_INTERVAL } from "@/shared/config/defs"

export type QueryCacheStrategy = {
  fetch<T>(
    key: unknown[],
    getData: () => Promise<T | null>
  ): Promise<T | null>
}

export class DummyQueryCacheStrategy implements QueryCacheStrategy {
  fetch<T>(
    _: unknown[],
    getData: () => Promise<T | null>
  ): Promise<T | null> {
    return getData()
  }
}

export class ReactQueryCacheStrategy implements QueryCacheStrategy {
  private timer

  constructor(
    private queryClient = new QueryClient({
      defaultOptions: {
        queries: { staleTime: Infinity },
      },
    }),
  ) {
    this.timer = setInterval(() => {
      queryClient.invalidateQueries()
      // queryClient.refetchQueries()
    }, QUERY_CACHE_REFETCH_INTERVAL)
  }

  fetch<T>(
    key: unknown[],
    getData: () => Promise<T | null>
  ): Promise<T | null> {
    return this.queryClient.fetchQuery({
      queryKey: key,
      queryFn: getData,
    })
  }

  stopRefetching() {
    clearInterval(this.timer)
  }
}
