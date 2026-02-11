/**
 * Content type definitions
 */

import { z } from "zod";

// Locale type
export type Locale = "de" | "en";

// Visibility schema (common to both types)
const VisibilitySchema = z.object({
  publicUrl: z.string().nullable(),
  screenshotsAllowed: z.boolean().nullable(),
});

// Narrative schema (hero projects only)
const NarrativeSchema = z
  .object({
    label: z.string(),
    bodyText: z.string(),
    source: z.string(),
  })
  .passthrough();

// Base schema with common fields
const ProjectBaseSchema = z.object({
  id: z.string(),
  dateRange: z.string(),
  showInCV: z.boolean().nullable(),
  showInArchive: z.boolean().nullable(),
  detailPage: z.boolean(),
  wentLive: z.boolean(),
  visibility: VisibilitySchema,
  techStack: z.union([z.array(z.string()), z.string()]),
});

// Hero project schema (isHero: true)
export const HeroProjectSchema = ProjectBaseSchema.extend({
  isHero: z.literal(true),
  title: z.string(),
  aliases: z.array(z.string()),
  clientOrOrganization: z.string(),
  agencyOrPartner: z.string(),
  roleText: z.string(),
  employmentTypeText: z.string(),
  locationText: z.string(),
  narratives: z.array(NarrativeSchema),
}).passthrough();

// Regular project schema (isHero: false)
export const RegularProjectSchema = ProjectBaseSchema.extend({
  isHero: z.literal(false),
  title: z.string(),
  client: z.string(),
  focusAreas: z.array(z.string()),
}).passthrough();

// Discriminated union schema
export const ProjectSchema = z.discriminatedUnion("isHero", [
  HeroProjectSchema,
  RegularProjectSchema,
]);

// TypeScript types
export type HeroProject = z.infer<typeof HeroProjectSchema>;
export type RegularProject = z.infer<typeof RegularProjectSchema>;
export type Project = z.infer<typeof ProjectSchema>;

// Project with markdown content
export type ProjectWithContent = Project & {
  content: string;
};
