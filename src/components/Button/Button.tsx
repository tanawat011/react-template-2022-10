import tw from 'tailwind-styled-components'

import type { Color, Props } from 'types/common'

export interface ButtonProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  color?: Color
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  children?: React.ReactNode
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

type FcButtonProps = React.FC<ButtonProps>

const TwButton = tw.button`
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
  ${(p: Props<ButtonProps>) => {
    switch (p.$props.color) {
      case 'secondary':
        return 'bg-gray-500'
      case 'ternary':
        return 'bg-yellow-500'
      case 'primary':
      default:
        return 'bg-blue-500'
    }
  }}
`

export const Button: FcButtonProps = (props: ButtonProps) => {
  const { children, label = '' } = props

  return <TwButton $props={props}>{children ? children : <span>{label}</span>}</TwButton>
}
