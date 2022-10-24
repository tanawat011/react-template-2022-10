import tw from 'twin.macro'

const ButtonHover = tw.button`hover:bg-slate-700`
const ButtonDisabled = tw(ButtonHover)`disabled:bg-slate-600 disabled:cursor-not-allowed`
const ButtonFont = tw(ButtonDisabled)`text-white font-bold text-xs`
export const Button = tw(ButtonFont)`w-7 h-7 rounded flex items-center justify-center bg-slate-800`
