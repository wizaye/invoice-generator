import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { priorities, categories } from '../data/data';
import { Product } from '../data/schema';

export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'productId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Product ID' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('productId')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'productName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Product Name' />
    ),
    cell: ({ row }) => (
      <div className='flex space-x-2'>
        <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
          {row.getValue('productName')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'hsn',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='HSN' />
    ),
    cell: ({ row }) => <div>{row.getValue('hsn')}</div>,
  },
  // {
  //   accessorKey: 'mfgDate',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title='Manufacturing Date' />
  //   ),
  //   cell: ({ row }) => <div>{row.getValue('mfgDate')}</div>,
  // },
  // {
  //   accessorKey: 'expDate',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title='Expiration Date' />
  //   ),
  //   cell: ({ row }) => <div>{row.getValue('expDate')}</div>,
  // },
  {
    accessorKey: 'quantity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Quantity' />
    ),
    cell: ({ row }) => <div>{row.getValue('quantity')}</div>,
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Price' />
    ),
    cell: ({ row }) => <div>{`$${row.getValue('price')}`}</div>,
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Amount' />
    ),
    cell: ({ row }) => <div>{`$${row.getValue('amount')}`}</div>,
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Priority' />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue('priority')
      );

      if (!priority) {
        return null;
      }

      return (
        <div className='flex items-center'>
          {priority.icon && (
            <priority.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
