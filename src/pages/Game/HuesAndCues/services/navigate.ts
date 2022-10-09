import type { NavigateFunction } from 'react-router-dom'

import { PATH } from 'Routes'

const getPath = () => {
  const { HUES_AND_CUES, ROOT: GAME } = PATH.BACKOFFICE.GAME
  const { ROOT, SETUP_ROOM, SET_DISPLAY_NAME } = HUES_AND_CUES
  const BASE_PATH = `/${GAME}/${ROOT}`

  return { BASE_PATH, SETUP_ROOM, SET_DISPLAY_NAME }
}

export const toRoom = (navigate: NavigateFunction, roomId: string) => {
  const { BASE_PATH } = getPath()

  navigate(`${BASE_PATH}/${roomId}`)
}

export const toSetupRoom = (navigate: NavigateFunction) => {
  const { BASE_PATH, SETUP_ROOM } = getPath()

  navigate(`${BASE_PATH}/${SETUP_ROOM}`)
}

export const toSetDisplayRoom = (navigate: NavigateFunction) => {
  const { BASE_PATH, SET_DISPLAY_NAME } = getPath()

  navigate(`${BASE_PATH}/${SET_DISPLAY_NAME}`)
}
