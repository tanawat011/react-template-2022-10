type Prop = {
  width?: number
  height?: number
  className?: string
}

export const IconBoxArrow: React.FC<Prop> = ({ width = 10, height = 4, className }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={'0 0 10 4'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M8.807 3.40462H1.19294C0.665718 3.40462 0.401692 2.96975 0.774489 2.71543L4.58152 0.11824C4.81261 -0.0394134 5.18733 -0.0394134 5.41842 0.11824L9.22545 2.71543C9.59828 2.96975 9.33422 3.40462 8.807 3.40462Z' />
    </svg>
  )
}
