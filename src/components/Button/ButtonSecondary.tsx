import type { ButtonProps } from '.'

import React from 'react'

import { Button } from '.'

type ButtonSecondaryProps = Omit<ButtonProps, 'color'>

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = (props) => (
  <Button color='secondary' {...props} />
)
