type Prop = {
  width?: number
  height?: number
  color?: string
}

export const IconCircleDense: React.FC<Prop> = ({ width = 12, height = 12, color = '#626672' }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='6' cy='6' r='6' fill={color} />
    </svg>
  )
}
