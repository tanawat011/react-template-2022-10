import type { ButtonProps } from '.'

import React from 'react'

import { Button } from '.'

type ButtonTernaryProps = Omit<ButtonProps, 'color'>

export const ButtonTernary: React.FC<ButtonTernaryProps> = (props) => (
  <Button color='ternary' {...props} />
)
