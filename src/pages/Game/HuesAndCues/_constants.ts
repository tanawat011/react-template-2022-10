export const SESSION = {
  ID: 'sessionId',
  ROOM_ID: 'roomId',
  TEMP_ID: 'tempSessionId',
}

export const COLLECTION = {
  HUES_AND_CUES: 'hues_and_cues',
  PLAYERS: 'players',
}

export const DOCUMENT = {
  ROOMS: 'rooms',
}

export const FIRESTORE_PATH = {
  ROOMS_DOCUMENT: `${COLLECTION.HUES_AND_CUES}/${DOCUMENT.ROOMS}`,
  PLAYERS_COLLECTION: `${COLLECTION.PLAYERS}`,
}
