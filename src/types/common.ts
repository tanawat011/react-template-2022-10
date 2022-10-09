export type Color = 'primary' | 'secondary' | 'ternary'
export type Size = 'sm' | 'md' | 'lg'
export type ButtonType = 'button' | 'submit' | 'reset'

export type TwProps<T> = {
  $props: T
}

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type AnyType = string | number | boolean | object | never | unknown
