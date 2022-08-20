export type Color = 'primary' | 'secondary' | 'ternary' | 'success' | 'warning' | 'error'

export interface TwProps<T> {
  $props: T
}

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type AnyType = string | number | boolean
