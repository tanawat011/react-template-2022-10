import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import tw from 'tailwind-styled-components'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'primary'
    | 'secondary'
    | 'ternary'
    | 'outline'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  icon?: React.ReactNode
  children?: React.ReactNode
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

type FcButtonProps = React.FC<ButtonProps>

const TwButton: FcButtonProps = tw.button`
  flex
  ${(p: ButtonProps) => {
    switch (p.color) {
      case 'primary':
        return 'bg-space-blue'
      case 'secondary':
        return 'bg-secondary-500'
      case 'ternary':
        return 'bg-ternary-500'
      case 'outline':
        return 'bg-outline-500'
      case 'success':
        return 'bg-success-500'
      case 'danger':
        return 'bg-danger-500'
      case 'warning':
        return 'bg-warning-500'
      case 'info':
        return 'bg-info-500'
      default:
        return 'bg-aaa'
    }
  }}
`

export const Button: FcButtonProps = (props: ButtonProps) => {
  const { className, children, label = 'Button' } = props

  if (children) {
    return (
      <TwButton {...props} className={clsx(className, '')}>
        {children}
      </TwButton>
    )
  }

  return (
    <TwButton {...props}>
      <span>{label}</span>
    </TwButton>
  )
}
