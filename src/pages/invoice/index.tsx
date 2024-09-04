import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/custom/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormControl } from '@/components/ui/form';

const invoiceSchema = z.object({
  invoiceNumber: z.string().nonempty("Invoice number is required"),
  customerName: z.string().nonempty("Customer name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  billingDate: z.string().nonempty("Billing date is required"),
  dueDate: z.string().nonempty("Due date is required"),
  totalAmount: z.number().positive("Amount must be positive"),
});

type InvoiceFormValues = z.infer<typeof invoiceSchema>;

const InvoiceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
  });

  const onSubmit = (data: InvoiceFormValues) => {
    console.log('Invoice Data:', data);
    // Here you can handle the invoice data, e.g., send it to an API or save it in the database
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="invoiceNumber">Invoice Number</Label>
        <FormControl>
          <Input id="invoiceNumber" {...register('invoiceNumber')} />
          {errors.invoiceNumber && <p className="text-red-500">{errors.invoiceNumber.message}</p>}
        </FormControl>
      </div>

      <div>
        <Label htmlFor="customerName">Customer Name</Label>
        <FormControl>
          <Input id="customerName" {...register('customerName')} />
          {errors.customerName && <p className="text-red-500">{errors.customerName.message}</p>}
        </FormControl>
      </div>

      <div>
        <Label htmlFor="email">Customer Email</Label>
        <FormControl>
          <Input id="email" {...register('email')} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </FormControl>
      </div>

      <div>
        <Label htmlFor="billingDate">Billing Date</Label>
        <FormControl>
          <Input id="billingDate" type="date" {...register('billingDate')} />
          {errors.billingDate && <p className="text-red-500">{errors.billingDate.message}</p>}
        </FormControl>
      </div>

      <div>
        <Label htmlFor="dueDate">Due Date</Label>
        <FormControl>
          <Input id="dueDate" type="date" {...register('dueDate')} />
          {errors.dueDate && <p className="text-red-500">{errors.dueDate.message}</p>}
        </FormControl>
      </div>

      <div>
        <Label htmlFor="totalAmount">Total Amount</Label>
        <FormControl>
          <Input id="totalAmount" type="number" step="0.01" {...register('totalAmount', { valueAsNumber: true })} />
          {errors.totalAmount && <p className="text-red-500">{errors.totalAmount.message}</p>}
        </FormControl>
      </div>

      <Button type="submit">Create Invoice</Button>
    </form>
  );
};

export default InvoiceForm;
