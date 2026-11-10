# Portfolio migration

## Outcome
Replace the starter screen with Omatule Marvellous’s working single-page portfolio at `/`, preserving the archive’s content and core interactions while adapting it to the existing Lovable project.

## Work
- Port the hero, about, skills, projects, experience, contact, and footer sections with responsive navigation, project details, and the animated visual treatment.
- Bring available logo, background, and project artwork into Lovable’s asset flow; preserve the public health-check URL.
- Keep Web3Forms contact delivery behind a server-side secret so its key is not exposed in page code.
- Add page metadata and migration status. Leave missing CV, analytics integration details, and contact credentials clearly pending rather than inventing replacements.

## Technical details
- Keep the existing TanStack Start and React versions; do not bring over Next.js.
- Use a TanStack public server route for the health check and validated contact forwarding. Do not create a database because the portfolio has no data store.
- Verify the page, interactive project detail, health endpoint, available artwork, build signal, and tests. Live contact delivery remains blocked until its key is securely provided.
