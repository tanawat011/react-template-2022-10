export const Button = ({
  link,
  ...props
}: React.HTMLAttributes<never> & { [key: string]: unknown }) => {
  jest.fn().mockReturnValue(link)

  return (
    <button {...props} data-testid={'button'}>
      {props.children}
    </button>
  )
}
