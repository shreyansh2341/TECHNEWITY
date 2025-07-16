import express from "express";
import { z } from "zod";
import { sendContactEmail } from "./email";

const insertInquirySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string(),
});

export function registerRoutes(app: express.Express) {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      await sendContactEmail(validatedData);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (err: any) {
      console.error("❌ Route Error:", err);
      res.status(500).json({ message: "Failed to send email", error: err.message });
    }
  });

  app.get("/health", (_req, res) => {
    res.send("API is running ✅");
  });
}
