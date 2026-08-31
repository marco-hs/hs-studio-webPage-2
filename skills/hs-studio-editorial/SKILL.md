---
name: hs-studio-editorial
description: Preserve the cinematic editorial identity of the Hernández Sánchez Studio website when adding or changing projects, homepage previews, shared layout, typography, imagery, or motion.
---

# HS Studio Editorial Direction

Keep the work itself as the visual focus. Favor cinematic imagery, strong typography, restrained composition, and intentional motion over decorative interface treatments.

## Homepage project previews

- Give every homepage project title a dedicated image sequence on hover and keyboard focus.
- Show at most five evenly spaced project titles at once. Reveal additional projects through a masked, cyclic vertical scroll with smooth ease-in/ease-out motion and softly feathered top and bottom edges; do not expose a browser scrollbar or clip title text.
- Display the active sequence edge-to-edge across the full viewport behind the project list, using a cinematic `object-fit: cover` crop rather than a thumbnail, card, or bounded panel.
- Keep the title list legible above the imagery and retain the background reel as the default state when no project is active.
- Reuse the shared sequence implementation in `javascript/home.js`; add only the project trigger and optimized image set instead of creating project-specific animation logic.
- Preserve keyboard focus behavior, reduced-motion handling, responsive coverage, and on-demand image loading.
- Use optimized derivatives for previews and keep uploaded masters untouched.

## Shared presentation

Preserve the shared header and footer through `javascript/layout.js`. Keep styling premium, minimal, editorial, and consistent with the existing site; avoid template-like cards, glass effects, decorative gradients, and unnecessary UI ornament.
