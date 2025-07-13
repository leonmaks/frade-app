export const pathSplit = (path: string): [directory: string, file: string] => {
  // const func__ = "pathSplit"
  const lastSepInd = path.lastIndexOf("/")
  // console.log(func__, { lastSepInd })
  return [
    path.substring(0, lastSepInd),
    path.substring(lastSepInd + 1)
  ]
}

export const pathProtocol = (path: string) => {
  // const func__ = "getPathProtocol"

  if (!path || !path.length) return [undefined, undefined]

  try {
    const { protocol, pathname } = new URL(path)
    return [protocol, pathname]

  } catch (exc) {
    if (exc instanceof TypeError && 'code' in exc && exc.code == "ERR_INVALID_URL") {
      return ["local", path]
    }
    throw exc
  }
}
