export type DomainType = {
  name: string
}

export type RepoType = {
  domains: Record<string, DomainType>
}

export type WspType = Record<string, RepoType>
