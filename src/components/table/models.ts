import Button from '@/components/button/Button.tsx'

export enum ColumnType {
  ACTIONS = 'actions',
}

interface Action {
  key: string
  label: string
  action: (rowElement: any) => void
  variant?: Button['variant']
}

export interface Column {
  field: string
  headerName: string
  type?: ColumnType
  actions?: Action[]
  className?: string
}

export type ColumnDefs = Column[]

export interface TableProps<T> {
  columns: ColumnDefs
  data: T[]
}
