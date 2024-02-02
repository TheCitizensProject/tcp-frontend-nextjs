import { z } from "zod";

/**
 * Every event scraped by BrowseAI will yield a POST request to `/api/events` with a task result JSON object.
 * This schema only captures important fields in the JSON object to validate and parse
 */
export const taskSchema = z.object({
  task: z.object({
    id: z.string(),
    status: z.string(),
    createdAt: z.number(),
    finishedAt: z.number(),
    startedAt: z.number(),
    robotId: z.string(),
    inputParameters: z.object({
      originUrl: z.string(),
    }),
    capturedTexts: z.object({
      eventName: z.string(),
      eventDatetime: z.string(),
      eventLocation: z.string(),
      eventDescription: z.string(),
      eventImage: z.string(),
    }),
  }),
});
