import { ButtonProps } from '@/components/button/models.ts'

export enum ColumnType {
  ACTIONS = 'actions',
}

interface Action {
  key: string
  label: string
  action: (rowElement: any) => void
  variant?: ButtonProps['variant']
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
