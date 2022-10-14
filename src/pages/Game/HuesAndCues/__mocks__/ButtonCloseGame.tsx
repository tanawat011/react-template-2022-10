import { lowerAllKeys } from 'helpers/object'

type Prop = React.HTMLAttributes<never> & { [key: string]: unknown }

export const ButtonCloseGame = ({ ...props }: Prop) => {
  const _props = lowerAllKeys(props)

  return (
    <button {..._props} data-testid={'button'}>
      {_props.children || 'button'}
    </button>
  )
}
