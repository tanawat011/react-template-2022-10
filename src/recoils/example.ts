import { atom } from 'recoil'

export interface Example {
  name: string
  age: number
}

export const exampleState = atom({
  key: 'example',
  default: {
    name: '',
    age: 0,
  } as Example,
})
