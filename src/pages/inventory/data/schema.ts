import { z } from 'zod';

export const productSchema = z.object({
  productId: z.string(),      // Product ID
  productName: z.string(),    // Product Name
  hsn: z.string(),            // HSN (Harmonized System of Nomenclature)
  mfgDate: z.date(),          // Manufacturing Date (Date type)
  expDate: z.date(),          // Expiration Date (Date type)
  quantity: z.number(),       // Quantity
  price: z.number(),          // Price per unit
  amount: z.number(),         // Total Amount
});

export type Product = z.infer<typeof productSchema>;
