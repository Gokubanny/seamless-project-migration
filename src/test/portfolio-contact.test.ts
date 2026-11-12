import { describe, expect, it } from "vitest";

import { contactSubmissionSchema } from "@/lib/portfolio-contact";

const validSubmission = {
  name: "Marvellous",
  email: "hello@example.com",
  subject: "Project collaboration",
  message: "I would like to discuss a new project together.",
  website: "",
};

describe("contact submission validation", () => {
  it("accepts a complete, well-formed message", () => {
    expect(contactSubmissionSchema.safeParse(validSubmission).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a meaningful message", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, message: "Short" }).success).toBe(false);
  });

  it("rejects missing required contact details", () => {
    expect(contactSubmissionSchema.safeParse({ email: validSubmission.email }).success).toBe(false);
  });

  it("keeps bot trap content distinguishable for the delivery route", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, website: "spam" }).data?.website).toBe("spam");
  });
});