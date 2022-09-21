import type { To } from 'react-router-dom'
import type { TwStyle } from 'twin.macro'
import type { ButtonType, Color, Size } from 'types/common'

import { Link } from 'react-router-dom'
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
  link?: boolean
  to?: To
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const colorVariant: { [key in Color]: TwStyle } = {
  primary: tw`bg-space-blue hover:bg-onyx-gray disabled:bg-jade-gray`,
  secondary: tw`bg-lapis-blue hover:bg-onyx-gray disabled:bg-jade-gray`,
  ternary: tw`bg-soft-lapis-blue hover:bg-onyx-gray disabled:bg-jade-gray`,
}

const styleButton = (props: ButtonProps) => [
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
]

const TwButton = styled.button(styleButton)
const TwButtonLink = styled(Link)(styleButton)

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, disabled, label = '', onClick, link, to, ...allProps } = props

  if (link) {
    return (
      <TwButtonLink {...allProps} to={to || ''} data-testid='button-link'>
        {children ? children : <span>{label}</span>}
      </TwButtonLink>
    )
  }

  return (
    <TwButton {...allProps} disabled={disabled} onClick={onClick} data-testid='button'>
      {children ? children : <span>{label}</span>}
    </TwButton>
  )
}
