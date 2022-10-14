import type { RoomPlayer } from './type'

import { IconCircleDense } from 'components/Icons'

type Prop = {
  roomPlayers: RoomPlayer[]
}

export const DisplayMiniColorToken: React.FC<Prop> = ({ roomPlayers }) => {
  return (
    <>
      {roomPlayers
        .sort((a, b) => a.seq - b.seq)
        .map(({ color }) => {
          return (
            <div key={`display-mini-color-token-${color}`} className={color}>
              <IconCircleDense color={color} />
            </div>
          )
        })}
    </>
  )
}
