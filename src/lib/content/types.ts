/**
 * Content type definitions
 */

import { z } from "zod";

// Locale type
export type Locale = string;

// Visibility schema (common to both types)
const VisibilitySchema = z.object({
  publicUrl: z.string().nullable(),
  screenshotsAllowed: z.boolean().nullable(),
});

// Narrative schema (hero projects only)
const NarrativeSchemaCV = z.object({
  label: z.string(),
  bodyText: z.array(z.string()),
});

const NarrativeSchemaPortfolio = z.object({
  label: z.string(),
  bodyText: z.string(),
});

// Base schema with common fields
const ProjectBaseSchema = z.object({
  id: z.string(),
  dateRange: z.string(),
  showInCV: z.boolean(),
  showInArchive: z.boolean(),
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
  clientOrganization: z.string(),
  agencyOrPartner: z.string(),
  roleText: z.string(),
  employmentTypeText: z.string(),
  locationText: z.string(),
  narratives: z.object({
    cv: z.array(NarrativeSchemaCV),
    portfolio: z.array(NarrativeSchemaPortfolio).optional(),
  }),
  // Optional fields found in some hero projects
  contextText: z.string().optional(),
  publicUrl: z.string().optional(),
  focusAreas: z.array(z.string()).optional(),
}).strict();

// Regular project schema (isHero: false)
export const RegularProjectSchema = ProjectBaseSchema.extend({
  isHero: z.literal(false),
  title: z.string(),
  client: z.string(),
  focusAreas: z.array(z.string()),
}).strict();

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
  html: string;
};

export type HeroProjectWithContent = HeroProject & {
  html: string;
};

export type RegularProjectWithContent = RegularProject & {
  html: string;
};
