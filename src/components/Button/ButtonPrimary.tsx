import type { ButtonProps } from '../Button'

import React from 'react'

import { Button } from '../Button'

type ButtonPrimaryProps = Omit<ButtonProps, 'color'>

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = (props) => (
  <Button color='primary' {...props} />
)
