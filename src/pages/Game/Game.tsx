export const Game = () => {
  const users = [
    {
      id: 1,
      point: 0,
      color: 'bg-red-300',
    },
    {
      id: 2,
      point: 0,
      color: 'bg-blue-300',
    },
    {
      id: 3,
      point: 0,
      color: 'bg-lime-300',
    },
  ]

  const colors = [
    {
      id: 'a1',
      hex: '#612c0f',
      rgb: 'rgb(97, 44, 15)',
      hsl: 'hsl(21, 73%, 22%)',
    },
    {
      id: 'a2',
      hex: '#6c2711',
      rgb: 'rgb(108, 39, 17)',
      hsl: 'hsl(15, 73%, 25%)',
    },
    {
      id: 'a3',
      hex: '#752316',
      rgb: 'rgb(117, 35, 22)',
      hsl: 'hsl(8, 68%, 27%)',
    },
    {
      id: 'a4',
      hex: '#871e1c',
      rgb: 'rgb(135, 30, 28)',
      hsl: 'hsl(1, 66%, 32%)',
    },
    {
      id: 'a5',
      hex: '#941e1f',
      rgb: 'rgb(148, 30, 31)',
      hsl: 'hsl(359, 66%, 35%)',
    },
  ]

  const markers = [
    {
      userId: 1,
      cellId: 'i7',
    },
    {
      userId: 1,
      cellId: 'k16',
    },
    {
      userId: 2,
      cellId: 'a28',
    },
    {
      userId: 3,
      cellId: 'f20',
    },
  ]

  const columnCount = 30
  const rowCount = 16
  const charCodeStartAt = 65
  const charCodeEndAt = charCodeStartAt + rowCount - 1

  const col = []
  const row: string[] = []

  for (let i = charCodeStartAt; i <= charCodeEndAt; i++) {
    row.push(String.fromCharCode(i))
  }

  for (let i = 0; i < columnCount; i++) {
    col.push({ index: i + 1, row })
  }

  return (
    <>
      {col.map((column) => {
        return (
          <div key={column.index}>
            {column.row.map((char) => {
              const cellId = `${char}${column.index}`
              const cellIdLowerCase = cellId.toLowerCase()
              const marker = markers.find((m) => m.cellId === cellIdLowerCase)
              const color = users.find((u) => u.id === marker?.userId)?.color || 'bg-slate-300'

              return (
                <div key={column.index + char} className={`${color} m-1`}>
                  {cellId}
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
