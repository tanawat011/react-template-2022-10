import type { ButtonType, Color, Size, TwProps } from 'types/common'

import clsx from 'clsx'
import tw from 'tailwind-styled-components'

export interface ButtonProps {
  label?: string
  size?: Size
  color?: Color
  type?: ButtonType
  icon?: React.ReactNode
  children?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const TwButton = tw.button`
  flex
  justify-center
  items-center
  h-9
  min-w-[156px]
  px-2
  py-4
  rounded-4xl
  font-sans
  font-bold
  text-xs
  text-white
  leading-6
  cursor-pointer
  ${(p: TwProps<ButtonProps>) => {
    switch (p.$props.color) {
      case 'secondary':
        return 'bg-soft-lapis-blue'
      case 'ternary':
        return 'bg-lapis-blue'
      case 'primary':
      default:
        return clsx('bg-space-blue', 'hover:bg-onyx-gray', 'disabled:bg-jade-gray')
    }
  }}
`

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, disabled, label = '', onClick } = props

  return (
    <TwButton $props={props} disabled={disabled} onClick={onClick} data-testid='button'>
      {children ? children : <span>{label}</span>}
    </TwButton>
  )
}
