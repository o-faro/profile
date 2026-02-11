/**
 * Classification filters
 */

import type { ProjectWithContent } from "./types";

/**
 * Filter projects by isHero: true
 */
export function getHeroProjects(
  projects: ProjectWithContent[]
): ProjectWithContent[] {
  return projects.filter((project) => project.isHero === true);
}

/**
 * Filter projects by detailPage: true
 */
export function getDetailProjects(
  projects: ProjectWithContent[]
): ProjectWithContent[] {
  return projects.filter((project) => project.detailPage === true);
}

/**
 * Get all projects for profile/CV (ignoring showInCV flag)
 */
export function getProfileProjects(
  projects: ProjectWithContent[]
): ProjectWithContent[] {
  return projects;
}

/**
 * Get all projects for archive (ignoring showInArchive flag)
 */
export function getArchiveProjects(
  projects: ProjectWithContent[]
): ProjectWithContent[] {
  return projects;
}

/**
 * Find a project by its ID
 */
export function getProjectById(
  projects: ProjectWithContent[],
  id: string
): ProjectWithContent | undefined {
  return projects.find((project) => project.id === id);
}

/**
 * Sort projects by start date (newest first)
 */
export function sortProjectsByDate(
  projects: ProjectWithContent[]
): ProjectWithContent[] {
  return [...projects].sort((a, b) => {
    // Extract start date from dateRange (format: "MM.YYYY" or "DD.MM.YYYY")
    const getStartDate = (dateRange: string): Date => {
      const startPart = dateRange.split("–")[0].trim();

      // Try to parse date (handle both "MM.YYYY" and "DD.MM.YYYY" formats)
      const parts = startPart.split(".");

      if (parts.length === 2) {
        // Format: "MM.YYYY"
        const [month, year] = parts;
        return new Date(parseInt(year), parseInt(month) - 1);
      } else if (parts.length === 3) {
        // Format: "DD.MM.YYYY"
        const [day, month, year] = parts;
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      }

      // Fallback to epoch if parsing fails
      return new Date(0);
    };

    const dateA = getStartDate(a.dateRange);
    const dateB = getStartDate(b.dateRange);

    // Sort descending (newest first)
    return dateB.getTime() - dateA.getTime();
  });
}
