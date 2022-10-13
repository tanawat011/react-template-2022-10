type Prop = {
  width?: number
  height?: number
  color?: string
}

export const IconCheck: React.FC<Prop> = ({ width = 16, height = 12, color = '#626672' }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.43431 11.7643L0.234305 6.53442C-0.0781016 6.22021 -0.0781016 5.71077 0.234305 5.39654L1.36565 4.25865C1.67806 3.94442 2.18462 3.94442 2.49703 4.25865L6 7.78174L13.503 0.235652C13.8154 -0.0785507 14.3219 -0.0785507 14.6344 0.235652L15.7657 1.37353C16.0781 1.68774 16.0781 2.19718 15.7657 2.51141L6.56569 11.7644C6.25325 12.0786 5.74672 12.0786 5.43431 11.7643V11.7643Z'
        fill={color}
      />
    </svg>
  )
}
