/**
 * Content loader
 */

import fs from "fs/promises";
import path from "path";
import { ProjectSchema, type Locale, type ProjectWithContent } from "./types";
import { parseMarkdownFile } from "./parseMarkdownFile";

/**
 * Get all projects for a given locale
 */
export async function getAllProjects(
  locale: Locale
): Promise<ProjectWithContent[]> {
  console.log("get all pro", locale);
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
    const { frontmatter, html } = await parseMarkdownFile(fileContents);

    try {
      // Validate and parse with Zod
      const project = ProjectSchema.parse(frontmatter);

      projects.push({
        ...project,
        html,
      });
    } catch {
      // console.error(`Failed to parse project file ${file}:`, error);
      // throw error;
    }
  }

  return projects;
}

/**
 * Get page content for a given locale and page name (slug).
 * Resolves partial filenames: e.g. slug "siemens-hellopage" matches
 * "siemens-hellopage-2019-01-2021-03-hero.md".
 */
export async function getPageContent(
  locale: Locale,
  pageName: string
): Promise<{ frontmatter: Record<string, string>; html: string } | null> {
  const projectsDir = path.join(process.cwd(), "content", "projects", locale);

  try {
    const allFiles = await fs.readdir(projectsDir);
    const matches = allFiles.filter(
      (file) =>
        file.endsWith(".md") &&
        (file === `${pageName}.md` || file.startsWith(`${pageName}-`))
    );

    if (matches.length === 0) return null;

    const file = matches[0];
    const filePath = path.join(projectsDir, file);
    const fileContents = await fs.readFile(filePath, "utf8");
    const { frontmatter, html } = await parseMarkdownFile(fileContents);
    return {
      frontmatter,
      html,
    };
  } catch {
    return null;
  }
}

export async function getPage(
  locale: Locale,
  pageName: string
): Promise<{ frontmatter: Record<string, unknown>; html: string } | null> {
  const filePath = path.join(
    process.cwd(),
    "content",
    "pages",
    locale,
    `${pageName}.md`
  );

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const { frontmatter, html } = await parseMarkdownFile(fileContents);
    return { frontmatter, html };
  } catch {
    return null;
  }
}
