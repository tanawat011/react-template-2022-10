export type FirebaseOperator = '==' | '<' | '<=' | '>' | '>=' | 'array-contains'

export type QueryOption = {
  limit?: number
  orderBy?: string
  where?: {
    field: string
    operator: FirebaseOperator
    value: string | number | boolean
  }
}
