import { Layout } from '@/components/custom/layout'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { products } from './data/products'
import { Button } from '@/components/custom/button'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function Inventory() {
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    status: '',
    priority: ''
  });

  const handleAddProduct = () => {
    // Logic to add product (e.g., updating state or calling an API)
    console.log(newProduct);
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
            <h2 className='text-2xl font-bold tracking-tight'>Inventory Management</h2>
            <p className='text-muted-foreground'>Manage your products here.</p>
          </div>
        </div>

        {/* Tabs for Products Overview and Add Product */}
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Products Overview</TabsTrigger>
            <TabsTrigger value='add-product'>Add Product</TabsTrigger>
          </TabsList>

          {/* Products Overview Tab */}
          <TabsContent value='overview'>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
              <DataTable data={products} columns={columns} />
            </div>
          </TabsContent>

          {/* Add Product Tab */}
          <TabsContent value='add-product'>
            <div className='space-y-4'>
              <Input
                placeholder='Product ID'
                value={newProduct.id}
                onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
              />
              <Input
                placeholder='Product Title'
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
              />
              <Input
                placeholder='Product Status'
                value={newProduct.status}
                onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
              />
              <Input
                placeholder='Product Priority'
                value={newProduct.priority}
                onChange={(e) => setNewProduct({ ...newProduct, priority: e.target.value })}
              />
              <Button onClick={handleAddProduct}>Add Product</Button>
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  );
}
