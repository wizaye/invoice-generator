import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
 // Assume you have a DatePicker component

// Define your schema
const invoiceSchema = z.object({
  billingAddress: z.object({
    name: z.string().nonempty('Name is required'),
    addressLine1: z.string().nonempty('Address Line 1 is required'),
    addressLine2: z.string().optional(),
    city: z.string().nonempty('City is required'),
    state: z.string().nonempty('State is required'),
    postalCode: z.string().nonempty('Postal Code is required'),
    country: z.string().nonempty('Country is required'),
  }),
  particulars: z.array(z.object({
    item: z.string().nonempty('Item is required'),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
    price: z.number().min(0, 'Price must be at least 0'),
  })),
  totalAmount: z.number().min(0, 'Total Amount must be at least 0'),
  invoiceDate: z.date(),
  dueDate: z.date()
});

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

const defaultValues: Partial<InvoiceFormValues> = {
  billingAddress: {
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  particulars: [],
  totalAmount: 0,
  invoiceDate: undefined,
  dueDate: undefined,
};

export default function InvoiceForm() {
  const [step, setStep] = useState(1);

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues,
  });

  const onSubmit = (data: InvoiceFormValues) => {
    toast({
      title: 'Invoice submitted',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Handle form submission logic
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        {step === 1 && (
          <div>
            <h2>Billing Address</h2>
            <FormField
              control={form.control}
              name='billingAddress.name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Repeat FormField for other billing address fields */}
            <Button type='button' onClick={() => setStep(2)}>Next: Add Particulars</Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Particulars</h2>
            {/* Implement fields for particulars */}
            <Button type='button' onClick={() => setStep(1)}>Back to Billing Address</Button>
            <Button type='button' onClick={() => setStep(3)}>Next: Generate Invoice</Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Final Invoice</h2>
            {/* Display summary and final submission */}
            <Button type='button' onClick={() => setStep(2)}>Back to Particulars</Button>
            <Button type='submit'>Submit Invoice</Button>
          </div>
        )}
      </form>
    </Form>
  );
}
