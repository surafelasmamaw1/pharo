import { z } from "zod";

const phoneRegExp =
  /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Full name is required").max(120),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(6, "Please enter a valid phone number")
    .max(30, "Phone number is too long")
    .regex(phoneRegExp, "Please enter a valid phone number"),
  subject: z.string().min(2, "Subject is required").max(160),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(4000, "Message is too long"),
});
