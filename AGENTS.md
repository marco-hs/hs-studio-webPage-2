# Hernandez Sanchez Studio Website — Agent Instructions

## PROJECT

- This is the website for Hernandez Sanchez Studio, a film production and post-production studio.
- This is a real production website, not a demo project.
- Production is deployed through GitHub and Netlify.
- The site is currently a static HTML/CSS/vanilla-JavaScript project. Main pages live in `html/`, styles in `css/`, browser scripts in `javascript/`, and media in `img/`.
- The root `index.html` redirects visitors to `html/index.html`; preserve that entry-point behavior unless explicitly instructed otherwise.

## DESIGN DIRECTION

- For editorial website and project-presentation changes, follow `skills/hs-studio-editorial/SKILL.md`.

- The site should feel cinematic, premium, minimal, editorial, and contemporary.
- The work itself should remain the visual focus.
- Favor strong typography, composition, whitespace, and imagery over decorative UI.
- Avoid generic SaaS aesthetics.
- Avoid excessive gradients, glassmorphism, rounded cards, unnecessary shadows, and UI patterns that make the site look like a template.
- Animation should feel intentional and cinematic rather than decorative.
- Preserve the visual identity of the existing site unless explicitly asked to redesign something.

## ENGINEERING

- Prefer simple solutions.
- Do not introduce frameworks or dependencies unless there is a clear reason.
- Do not rewrite working sections merely to modernize syntax.
- Preserve responsive behavior across desktop, landscape, and mobile layouts.
- Preserve existing URLs and project pages unless explicitly instructed otherwise.
- Treat image and video assets carefully because this is a media-heavy portfolio.
- Avoid unnecessarily increasing page weight. Prefer responsive media, lazy/on-demand loading, and optimized encodes where appropriate.
- Do not delete existing assets unless explicitly instructed.
- Keep shared navigation and footer behavior consistent through `javascript/layout.js`.
- Keep the home-page hover image-sequence feature intact unless explicitly asked to change it.

## AGENTIC WORKFLOW

For non-trivial tasks:

1. Inspect the relevant code before editing.
2. Understand the existing implementation.
3. Form a short plan.
4. Implement the smallest coherent change.
5. Verify the result.
6. Review your own implementation for regressions and unnecessary complexity.
7. Fix problems found during review.
8. Summarize what changed and how it was verified.

## SAFETY

- Never push to GitHub unless explicitly asked.
- Never deploy to Netlify unless explicitly asked.
- Never modify Git history unless explicitly asked.
- Do not delete or overwrite large groups of media assets without explicit approval.
- If a requested change could substantially alter the visual identity or architecture, explain the proposed approach before implementing it.
- Do not install dependencies or change deployment settings without explicit approval.
- Preserve user changes already present in the working tree; inspect and avoid unrelated edits.

## LEARNING

- The repository owner is learning agentic software development.
- When useful, briefly explain important architectural or workflow decisions.
- Do not over-explain routine edits.
- Prefer teaching through the actual project and changes being made.
