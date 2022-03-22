import { castArray } from 'lodash-es'

export function filterFields(fields, props) {
  const normalized = castArray(props)

  return normalized.length ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields
}
