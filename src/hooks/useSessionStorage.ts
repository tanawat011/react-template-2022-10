import type { AnyType } from 'types/common'

import { useState } from 'react'

type Prop = [string, (value: string) => void, () => void]

export const useSessionStorage = (sessionKey: string): Prop => {
  const initialValue = sessionStorage.getItem(sessionKey) || ''

  const [item, setItem] = useState(initialValue)

  const handleSetItem = (value: AnyType) => {
    const data = typeof value === 'string' ? value : JSON.stringify(value)

    sessionStorage.setItem(sessionKey, data)
    setItem(data)
  }

  const handleDeleteItem = () => {
    sessionStorage.removeItem(sessionKey)
  }

  let response

  try {
    response = JSON.parse(item)
  } catch (error) {
    response = item
  }

  return [response, handleSetItem, handleDeleteItem]
}
