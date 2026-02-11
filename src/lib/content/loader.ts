/**
 * Content loader
 */

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { ProjectSchema, type Locale, type ProjectWithContent } from "./types";

/**
 * Get all projects for a given locale
 */
export async function getAllProjects(
  locale: Locale
): Promise<ProjectWithContent[]> {
  const projectsDir = path.join(process.cwd(), "content", "projects", locale);

  // Check if directory exists
  try {
    await fs.access(projectsDir);
  } catch {
    return [];
  }

  // Read all markdown files (excluding example files)
  const allFiles = await fs.readdir(projectsDir);
  const files = allFiles.filter(
    (file) => file.endsWith(".md") && !file.startsWith("example-")
  );

  const projects: ProjectWithContent[] = [];

  for (const file of files) {
    const filePath = path.join(projectsDir, file);
    const fileContents = await fs.readFile(filePath, "utf8");

    // Parse frontmatter
    const { data, content } = matter(fileContents);

    try {
      // Validate and parse with Zod
      const project = ProjectSchema.parse(data);

      projects.push({
        ...project,
        content,
      });
    } catch (error) {
      console.error(`Failed to parse project file ${file}:`, error);
      throw error;
    }
  }

  return projects;
}

/**
 * Get page content for a given locale and page name
 */
export async function getPageContent(
  locale: Locale,
  pageName: string
): Promise<{ data: unknown; content: string } | null> {
  const pagePath = path.join(
    process.cwd(),
    "content",
    "pages",
    locale,
    `${pageName}.md`
  );

  try {
    const fileContents = await fs.readFile(pagePath, "utf8");
    const { data, content } = matter(fileContents);
    return { data, content };
  } catch {
    return null;
  }
}
