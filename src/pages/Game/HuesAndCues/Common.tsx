import tw from 'twin.macro'

export const Cell = tw.div`m-1 w-7 h-7 text-white font-bold text-center select-none relative`
export const CellTransparent = tw(Cell)`bg-transparent`
export const CellClickable = tw(Cell)`cursor-pointer flex justify-center items-center text-xs`
export const CellScoreBoard = tw(CellClickable)`w-9 h-14 flex-wrap`
export const Marker = tw.div`w-3 h-3 rounded-full border shadow-2xl flex items-center justify-center`
export const MarkerLG = tw(Marker)`w-6 h-6`
