import { parse } from "yaml"
import Ajv, { type AnySchema } from "ajv"

import {
  ParsingError,
  ValidationError
} from "@/shared/lib/errors"

const ajv = new Ajv({
  allErrors: true,
  strict: true
})

export const parseYaml = async <T,>(
  text: string,
  schema?: string | AnySchema
) => {
  // const func__ = "parseYaml"
  // console.log(func__, { text, schema })
  try {
    const resultObject: unknown = await parse(text)

    if (!schema) return resultObject as T

    if (ajv.validate(schema, resultObject)) {
      return resultObject as T

    } else {
      throw new ValidationError([...(ajv.errors ?? [])])
    }

  } catch (exc) {
    throw new ParsingError(text, "ContentParsing error", exc)
  }
}
