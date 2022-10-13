type Prop = {
  width?: number
  height?: number
  color?: string
}

export const IconCaretRight: React.FC<Prop> = ({ width = 8, height = 12, color = '#626672' }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 11.1914V0.80859C0 0.0896493 1.02183 -0.270386 1.61943 0.237973L7.72217 5.42937C8.09261 5.7445 8.09261 6.25548 7.72217 6.57061L1.61943 11.762C1.02183 12.2704 0 11.9103 0 11.1914Z'
        fill={color}
      />
    </svg>
  )
}
