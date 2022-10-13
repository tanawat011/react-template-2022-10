type Prop = {
  width?: number
  height?: number
  color?: string
}

export const IconAngleRight: React.FC<Prop> = ({ width = 8, height = 12, color = '#626672' }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.72747 6.6373L2.46094 11.7357C2.09693 12.0881 1.50832 12.0881 1.14818 11.7357L0.273008 10.8885C-0.0910026 10.5361 -0.0910026 9.96626 0.273008 9.61762L4.00605 6.00375L0.273008 2.38988C-0.0910026 2.03749 -0.0910026 1.46767 0.273008 1.11903L1.14431 0.264292C1.50832 -0.0880974 2.09693 -0.0880974 2.45707 0.264292L7.7236 5.3627C8.09148 5.71509 8.09148 6.28491 7.72747 6.6373Z'
        fill={color}
      />
    </svg>
  )
}
