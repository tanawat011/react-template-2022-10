/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

type Prop = [string, (value: any) => void, () => void]

export const useSessionStorage = (sessionKey: string): Prop => {
  const initialValue = sessionStorage.getItem(sessionKey) || ''

  const [item, setItem] = useState(initialValue)

  const handleSetItem = (value: any) => {
    const data = typeof value === 'object' ? JSON.stringify(value) : value
    console.log('datadatadatadatadatadatadatadata', data)

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
