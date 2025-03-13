import { z } from 'zod'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

export const schema = z.object({
    name: z.string().min(1, "The name is required"),
    startDate: z.coerce.date().min(new Date(), 'The start date must be greater than today'),
    endDate: z.coerce.date(),
    clicks: z.number().default(0),
    cost: z.coerce.number().min(0, 'The value must be greater than 0'),
    revenue: z.coerce.number().min(0, 'The value must be greater than 0'),
}).refine(data => data.endDate > data.startDate, {
    message: "The end date must be greater than or equal to the start date.",
    path: ["endDate"],
  });

export type FormValues = z.infer<typeof schema>