import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@/components/table/Table.tsx'
import { ColumnType } from '@/components/table/models.ts'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  args: {
    columns: [
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
    ],
    data: [
      { name: 'Juanjo', surname: 'Martin' },
      { name: 'Rocio', surname: 'Ruiz' },
      { name: 'Pepe', surname: 'Jimenez' },
    ]
  },
  argTypes: {
    columns: {
      description: 'Columns of the table',
    },
    data: { description: 'Data of the table' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  // args: {
  //   children: 'Button',
  // },
};