export type Color = 'primary' | 'secondary' | 'ternary'

export interface Props<T> {
  $props: T
}

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
