type Prop = {
  width?: number
  height?: number
  color?: string
}

export const IconEllipsis: React.FC<Prop> = ({ width = 4, height = 14, color = '#626672' }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 4.96774C3.10556 4.96774 4 5.87661 4 7C4 8.12339 3.10556 9.03226 2 9.03226C0.894444 9.03226 0 8.12339 0 7C0 5.87661 0.894444 4.96774 2 4.96774ZM0 2.03226C0 3.15565 0.894444 4.06452 2 4.06452C3.10556 4.06452 4 3.15565 4 2.03226C4 0.908871 3.10556 0 2 0C0.894444 0 0 0.908871 0 2.03226ZM0 11.9677C0 13.0911 0.894444 14 2 14C3.10556 14 4 13.0911 4 11.9677C4 10.8444 3.10556 9.93548 2 9.93548C0.894444 9.93548 0 10.8444 0 11.9677Z'
        fill={color}
      />
    </svg>
  )
}
