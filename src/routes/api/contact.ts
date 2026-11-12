import { createFileRoute } from "@tanstack/react-router";
import { contactSubmissionSchema } from "@/lib/portfolio-contact";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentType = request.headers.get("content-type") ?? "";
        if (!contentType.toLowerCase().includes("application/json")) {
          return Response.json({ error: "Send your message using the contact form." }, { status: 415 });
        }

        const requestSize = Number(request.headers.get("content-length") ?? 0);
        if (requestSize > 12_000) return Response.json({ error: "Your message is too long." }, { status: 413 });

        const origin = request.headers.get("origin");
        if (!origin) return Response.json({ error: "This request could not be accepted." }, { status: 403 });
        try {
          if (new URL(origin).origin !== new URL(request.url).origin) {
            return Response.json({ error: "This request could not be accepted." }, { status: 403 });
          }
        } catch {
          return Response.json({ error: "This request could not be accepted." }, { status: 403 });
        }

        let raw: unknown;
        try {
          const rawBody = await request.text();
          if (rawBody.length > 12_000) return Response.json({ error: "Your message is too long." }, { status: 413 });
          raw = JSON.parse(rawBody);
        } catch {
          return Response.json({ error: "Check the message details and try again." }, { status: 400 });
        }

        const parsed = contactSubmissionSchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json({ error: "Check each field and try again." }, { status: 400 });
        }

        const { name, email, subject, message, website } = parsed.data;
        if (website.trim()) {
          return Response.json({ success: true });
        }

        const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
        if (!accessKey) {
          return Response.json({ error: "Message delivery is not available right now. Please email me directly." }, { status: 503 });
        }

        try {
          const providerResponse = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ access_key: accessKey, name, email, subject, message, from_name: "Omatule Marvellous Portfolio" }),
            signal: AbortSignal.timeout(12_000),
          });

          const providerResult = await providerResponse.json() as { success?: boolean };
          if (!providerResponse.ok || !providerResult.success) {
            return Response.json({ error: "Your message could not be delivered. Please try again later." }, { status: 502 });
          }

          return Response.json({ success: true });
        } catch {
          return Response.json({ error: "Your message could not be delivered. Please try again later." }, { status: 502 });
        }
      },
    },
  },
});