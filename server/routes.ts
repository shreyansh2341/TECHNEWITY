import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json({ 
        message: "Inquiry submitted successfully",
        inquiry: { id: inquiry.id, createdAt: inquiry.createdAt }
      });
    } catch (error: any) {
      res.status(400).json({ 
        message: "Invalid inquiry data",
        error: error.message 
      });
    }
  });

  // Get all inquiries (for admin purposes)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error: any) {
      res.status(500).json({ 
        message: "Failed to fetch inquiries",
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
