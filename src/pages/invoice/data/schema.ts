import { z } from 'zod';

// Billing Address Schema
const billingAddressSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  addressLine1: z.string().min(1, 'Address Line 1 is required'),
  addressLine2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().min(5, 'Postal Code must be at least 5 characters').max(10, 'Postal Code must be less than 10 characters'),
  country: z.string().min(1, 'Country is required'),
});

// Particulars Schema
const particularsSchema = z.array(
  z.object({
    description: z.string().min(1, 'Description is required'),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
    price: z.number().min(0.01, 'Price must be at least 0.01'),
    amount: z.number().min(0, 'Amount cannot be negative'),
  })
);

// Invoice Schema
const invoiceSchema = z.object({
  billingAddress: billingAddressSchema,
  particulars: particularsSchema,
  totalAmount: z.number().min(0, 'Total amount cannot be negative'),
  invoiceDate: z.date().optional(),
  dueDate: z.date().optional(),
});

export default invoiceSchema;
