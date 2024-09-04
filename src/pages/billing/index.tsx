import { Layout } from '@/components/custom/layout'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { invoices } from './data/invoices'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { useState } from 'react'

export default function Billing() {
  const [newInvoice, setNewInvoice] = useState({
    invoiceNumber: '',
    clientName: '',
    amount: '',
    dueDate: ''
  });

  const handleGenerateInvoice = () => {
    // Logic to generate a new invoice (e.g., updating state or calling an API)
    console.log(newInvoice);
  };

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Bills Management</h2>
            <p className='text-muted-foreground'>Here’s a list of your bills!</p>
          </div>
        </div>

        {/* Tabs for Overview and Generate a New Invoice */}
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='generate-invoice'>Generate a New Invoice</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value='overview'>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
              <DataTable data={invoices} columns={columns} />
            </div>
          </TabsContent>

          {/* Generate a New Invoice Tab */}
          <TabsContent value='generate-invoice'>
            <div className='space-y-4'>
              <Input
                placeholder='Invoice Number'
                value={newInvoice.invoiceNumber}
                onChange={(e) => setNewInvoice({ ...newInvoice, invoiceNumber: e.target.value })}
              />
              <Input
                placeholder='Client Name'
                value={newInvoice.clientName}
                onChange={(e) => setNewInvoice({ ...newInvoice, clientName: e.target.value })}
              />
              <Input
                placeholder='Amount'
                value={newInvoice.amount}
                onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
              />
              <Input
                placeholder='Due Date'
                type='date'
                value={newInvoice.dueDate}
                onChange={(e) => setNewInvoice({ ...newInvoice, dueDate: e.target.value })}
              />
              <Button onClick={handleGenerateInvoice}>Generate Invoice</Button>
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}
