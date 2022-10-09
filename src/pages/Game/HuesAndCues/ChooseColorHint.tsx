import type { RoomPlayer } from './_type'

import { Button } from 'components/Button'
import { TwRow } from 'components/Common'
import { huesAndCues } from 'data/HuesAndCues'

import { CellClickable } from './Common'

type Prop = {
  currentPlayer: RoomPlayer
  updateCurrentPlayer: (currentPlayer: RoomPlayer) => void
}

export const ChooseColorHint: React.FC<Prop> = ({ currentPlayer, updateCurrentPlayer }) => {
  const randomNumber = (toNumber = 10) => {
    return Math.floor(Math.random() * toNumber) + 1
  }

  const randomColorId = () => {
    const charNumber = randomNumber(16)
    const colNumber = randomNumber(30)
    const char = String.fromCharCode(charNumber + 64)

    return `${char}${colNumber}`
  }

  const handleRandomColorHint = async () => {
    if (currentPlayer) {
      let choice: string[] = []

      for (let i = 1; i <= 4; i++) {
        choice = [...choice, randomColorId()]
      }

      const _currentPlayer: RoomPlayer = {
        ...currentPlayer,
        choice,
      }

      updateCurrentPlayer(_currentPlayer)
    }
  }

  const handleChooseColorHint = async (result: string) => {
    if (currentPlayer && !currentPlayer?.result) {
      const _currentPlayer: RoomPlayer = {
        ...currentPlayer,
        result,
      }

      updateCurrentPlayer(_currentPlayer)
    }
  }

  const colorsSelectable = currentPlayer?.choice || []
  const colorSelected = huesAndCues.flat().find((c) => c.id === currentPlayer?.result)
  const hasColorSelectable = !!colorsSelectable.length
  const nonColorSelectable = !hasColorSelectable

  return (
    <div className='mb-2 p-3 shadow-around flex divide-x'>
      <div>
        <div className='pl-2 mb-1 text-white font-bold select-none'>Choose Color Hint</div>

        <TwRow>
          {nonColorSelectable && <Button onClick={handleRandomColorHint}>Random Color Hint</Button>}

          {hasColorSelectable &&
            colorsSelectable.map((colorId) => {
              const data = huesAndCues.flat().find((c) => c.id === colorId)

              return (
                <CellClickable
                  key={`choose-color-hint-${data?.color}`}
                  className={data?.color}
                  onClick={() => handleChooseColorHint(colorId)}
                >
                  {colorId}
                </CellClickable>
              )
            })}
        </TwRow>
      </div>

      <div className='ml-3 pl-3'>
        <div className='mb-1 text-white font-bold select-none'>Color Selected</div>

        <TwRow>
          {colorSelected && (
            <CellClickable
              key={`color-selected-${colorSelected?.color}`}
              className={colorSelected?.color}
            >
              {colorSelected?.id}
            </CellClickable>
          )}
        </TwRow>
      </div>
    </div>
  )
}
