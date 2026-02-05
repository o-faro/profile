# Personal Homepage – React / Next.js

This repository contains the source code for my personal homepage.  
It serves two purposes:

1. A public-facing website to present selected projects and experience
2. A technical showcase demonstrating how I approach React applications in a long-lived, production-minded way

The codebase intentionally favors clarity, restraint, and explicit tradeoffs over feature density.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Rendering:** Static export (`output = "export"`)
- **Package Manager:** pnpm
- **Testing:** React Testing Library (runner chosen explicitly)
- **Linting & Formatting:** ESLint + Prettier

---

## Architectural Constraints (Intentional)

This project is built as a **fully static site**.

As a result, the following constraints are intentional and enforced:

- No server-side rendering at runtime
- No middleware
- No server actions
- No dynamic routes without static parameter generation
- Image optimization disabled or handled explicitly

These constraints keep the deployment simple, predictable, and performant, and they reflect the actual needs of a personal homepage.

---

## Project Philosophy

This repository is intentionally conservative.

- No premature abstractions
- No custom frameworks on top of frameworks
- No over-automation
- No demo content or placeholder features

Each piece of tooling exists for a clear reason and earns its place.

---

## Testing Approach

Tests focus on **rendering behavior and user-relevant outcomes**, not internal implementation details.

The goal is confidence during refactoring, not maximal coverage.

---

## Dependency Management

Automated dependency update bots (e.g. Dependabot, Renovate) are intentionally **not enabled**.

For a personal project with a single maintainer, automated update PRs tend to add noise without meaningful value.  
The project structure is compatible with such tools if this changes in the future.

---

## Scripts

Common scripts include:

- `pnpm dev` – local development
- `pnpm build` – production build
- `pnpm lint` – linting
- `pnpm typecheck` – TypeScript validation
- `pnpm test` – test suite
- `pnpm release --patch|minor|major` – versioned release with changelog

---

## Versioning & Commits

- Semantic commit messages
- Explicit breaking change markers
- Changelog generated from commit history

The commit history is considered part of the documentation.

---

## Non-Goals

This project does **not** aim to demonstrate:

- Authentication flows
- Backend APIs
- Design systems
- Animations or visual experimentation
- Analytics or tracking

Those concerns are intentionally out of scope.

---

## License

Private use / personal website.
