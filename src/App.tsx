import './App.scss'
import Button from '@/components/button/Button.tsx'
import Table from '@/components/table/Table.tsx'
import { ColumnDefs, ColumnType } from '@/components/table/models.ts'
import Tag from '@/components/tag/Tag.tsx'

function App() {
  const columns: ColumnDefs = [
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'surname',
      headerName: 'Surname',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: ColumnType.ACTIONS,
      actions: [
        {
          key: 'seemore',
          label: 'See more',
          variant: 'primary',
          action: rowData => {
            alert(rowData.name)
          },
        },
      ],
    },
  ]

  const data = [
    { name: 'Juanjo', surname: 'Martin' },
    { name: 'Rocio', surname: 'Ruiz' },
    { name: 'Pepe', surname: 'Jimenez' },
  ]

  return (
    <main>
      <div className="buttons">
        <h1>Temporal playground</h1>
        <Button
          onClick={() => {
            console.log('Primary button')
          }}
        >
          Primary
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="text">Only text</Button>
      </div>
      <div className="table">
        <Table columns={columns} data={data} />
      </div>
      <div style={{ background: 'green', display: 'flex', padding: '20px', 'justifyContent': 'center', gap: '20px' }}>
        <Tag>Test 1</Tag>
        <Tag>Test 2</Tag>
      </div>
    </main>
  )
}

export default App
