export type Player = {
  uid: string
  name: string
}

export type RoomPlayer = {
  uid: string
  name: string
  score: number
  color: string // * color is a hex value
  cells: string[] // * cells that the player has selected
  owner: boolean // * if true, the player is the owner of the room
  number: number // * sequential number of player in room
  hinter?: boolean // * is the player the hinter
  choice?: string[] // * choice is an array of colorIds that the player can select
  result?: string // * result is the colorId of the color that the player has selected
  isSubmitResult?: boolean // * If true, the player has responded to the hint
  isMyTurn?: boolean // * If true, it is the player's turn
  isStartGame?: boolean // * If true, the game has started
  countTurn?: number // * The number of turns the player has taken
  countRound?: number // * The number of rounds that have passed
}
