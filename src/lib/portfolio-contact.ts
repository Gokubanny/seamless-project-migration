import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(500).default(""),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export function isSameOriginContactRequest(origin: string | null, requestUrl: string): boolean {
  if (!origin) return false;
  try {
    return new URL(origin).origin === new URL(requestUrl).origin;
  } catch {
    return false;
  }
}