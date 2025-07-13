export type ObjKeyType = string | number | symbol

export const isObject = (value: unknown) => (
  typeof value === "object" ? true : false
)

export const objKeyInit = <T>(
  obj: Record<ObjKeyType, T> = {},
  key: ObjKeyType,
  initialValue: T
) => {
  let value = obj[key]
  if (value === undefined) value = obj[key] = initialValue
  return value
}
