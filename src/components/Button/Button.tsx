import type { TwStyle } from 'twin.macro'
import type { ButtonType, Color, Size } from 'types/common'

import tw, { styled } from 'twin.macro'

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

const colorVariant: { [key in Color]: TwStyle } = {
  primary: tw`bg-space-blue hover:bg-onyx-gray disabled:bg-jade-gray`,
  secondary: tw`bg-lapis-blue hover:bg-onyx-gray disabled:bg-jade-gray`,
  ternary: tw`bg-soft-lapis-blue hover:bg-onyx-gray disabled:bg-jade-gray`,
}

const TwButton = styled.button((props: ButtonProps) => [
  tw`
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
    `,
  colorVariant[props.color || 'primary'],
])

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, disabled, label = '', onClick } = props

  return (
    <TwButton {...props} disabled={disabled} onClick={onClick} data-testid='button'>
      {children ? children : <span>{label}</span>}
    </TwButton>
  )
}
