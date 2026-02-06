# Project Structure (Scaffolding Only)

This document describes the folder and file structure created according to the plan.

## Content Structure

```
/content/
  /projects/
    /de/              # German project files
      example-hero.md
      archive-only.md
    /en/              # English project files
      example-hero.md
      archive-only.md
  /pages/
    /de/              # German page content
      home.md
    /en/              # English page content
      home.md
```

## Application Structure

```
/app/
  page.tsx                    # Root redirect to /{locale}
  /[locale]/
    layout.tsx                # Locale-aware layout (TODO)
    page.tsx                  # Homepage (TODO)
    /[slug]/
      page.tsx                # Project detail pages (TODO)
    /archive/
      page.tsx                # Archive page (TODO)
    /profile/
      page.tsx                # Profile/CV page (TODO)
```

## Library Structure

```
/src/lib/content/
  types.ts          # Frontmatter schema, types (TODO)
  loader.ts         # Markdown parsing, file reading (TODO)
  filters.ts        # Classification filters (TODO)
  paths.ts          # Static path generation (TODO)
```

## Next Steps

All files contain placeholder comments describing implementation intent.
No runtime logic, JSX, or validation has been implemented.

Refer to the plan document for full architectural details:

- Content is driven by frontmatter flags
- Routes are generated statically via generateStaticParams
- AST parsing only for detail/profile pages
- Simple Markdown→HTML elsewhere
