import Button from '@/components/button/Button.tsx'
import '@/components/table/Table.scss'
import { Column, ColumnType, TableProps } from '@/components/table/models.ts'

function Table<T>({ columns, data }: TableProps<T>) {
  const getDataFromField = (field: Column['field'], data: T): string => {
    const keys: string[] = field.split('.')
    let temp = data
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    keys.forEach(key => (temp = temp[key]))
    return temp as string
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(({ field, headerName }) => (
            <th key={field}>
              <span>{headerName}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => {
          return (
            <tr key={index}>
              {columns.map(({ field, type, actions, className }) => {
                const value = getDataFromField(field, el)
                if (type === ColumnType.ACTIONS) {
                  return (
                    <td key={field} className={className}>
                      {actions?.map(({ label, variant, action, key }) => (
                        <Button key={key} variant={variant} onClick={() => action(el)}>
                          {label}
                        </Button>
                      ))}
                    </td>
                  )
                } else
                  return (
                    <td key={field} className={className}>
                      <span>{value}</span>
                    </td>
                  )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
