import type { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'
import tw from 'tailwind-styled-components'

import type { COLOR } from 'types/common'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  color?: COLOR
  icon?: React.ReactNode
  children?: React.ReactNode
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

type FcButtonProps = React.FC<ButtonProps>

const TwButton: FcButtonProps = tw.button`
  flex
  justify-center
  items-center
  h-9
  px-2
  py-4
  rounded-2xl
  font-sans
  font-bold
  text-xs
  text-white
  leading-6
  min-w-[156px]
  cursor-pointer
`

export const Button: FcButtonProps = (props: ButtonProps) => {
  const { children, color, label = '', onClick } = props

  const getColor = (_color?: COLOR) => {
    switch (_color) {
      case 'secondary':
        return 'bg-gray-500'
      case 'ternary':
        return 'bg-yellow-500'
      case 'primary':
      default:
        return 'bg-blue-500'
    }
  }

  return (
    <TwButton className={clsx(getColor(color))} onClick={onClick}>
      {children ? children : <span>{label}</span>}
    </TwButton>
  )
}
