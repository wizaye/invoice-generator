import { z } from 'zod'

export const invoiceSchema = z.object({
  id: z.string(),
  clientName: z.string(),
  paymentStatus: z.string(), // You can adjust these statuses as needed
})

export type Invoice = z.infer<typeof invoiceSchema>
