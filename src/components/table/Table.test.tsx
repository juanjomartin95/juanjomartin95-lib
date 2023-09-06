import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Table from '@/components/table/Table.tsx'

describe('Table component', () => {
  const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
  ]

  const data = [
    { name: 'Juanjo', age: 27 },
    { name: 'Pepe', age: 30 },
  ]

  it('renders table header and data', () => {
    const { getByText } = render(<Table columns={columns} data={data} />)

    // Headers
    expect(getByText('Name')).toBeTruthy()
    expect(getByText('Age')).toBeTruthy()

    // Data
    expect(getByText('Juanjo')).toBeTruthy()
    expect(getByText('Pepe')).toBeTruthy()
    expect(getByText('27')).toBeTruthy()
    expect(getByText('30')).toBeTruthy()
  })
})
