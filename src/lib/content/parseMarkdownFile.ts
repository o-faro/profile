import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

function parseFrontmatter(fileContents: string) {
  const { data, content } = matter(fileContents);
  return {
    frontmatter: data,
    content,
  };
}

async function parseMarkdown(content: string) {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return processed.toString();
}

export async function parseMarkdownFile(fileContents: string) {
  const { frontmatter, content } = parseFrontmatter(fileContents);
  const html = await parseMarkdown(content);
  return {
    frontmatter,
    html,
  };
}
