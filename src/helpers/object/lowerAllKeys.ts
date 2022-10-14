/* eslint-disable @typescript-eslint/no-explicit-any */

export const lowerAllKeys = (obj: any) => {
  return Object.keys(obj).reduce((accumulator: any, key) => {
    accumulator[key.toLowerCase()] = obj[key]

    return accumulator
  }, {})
}
