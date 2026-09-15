# Gayan Shaminda — Software Engineering Portfolio

The source code for [gayanshaminda.me](https://gayanshaminda.me), a responsive portfolio presenting my software engineering experience, education, technical skills, and selected projects.

## Overview

The site is designed as a focused technical profile for recruiters and engineering teams. It combines a dark engineering-inspired visual system with subtle motion, an interactive project showcase, downloadable CV, and direct contact links.

## Features

- Responsive hero section with animated role text
- Personal portrait and professional introduction
- About Me and Education sections
- Seven-project interactive showcase
- Automatic project rotation with manual navigation
- Expandable project details and repository links
- Categorized technical skills
- Downloadable CV
- Accessible reduced-motion support
- Responsive navigation and mobile layout

## Technology Stack

| Area | Technologies |
| --- | --- |
| Framework | TanStack Start, React, TypeScript |
| Build tooling | Vite, Nitro |
| Styling | Tailwind CSS |
| Components | Radix UI |
| Motion | Motion for React |
| Hosting | Cloudflare Workers |
| Domain | `gayanshaminda.me` |

## Project Structure

```text
.
|-- public/                Static files and downloadable CV
|-- src/assets/            Portrait and project artwork
|-- src/components/        Portfolio and reusable UI components
|-- src/data/portfolio.ts  Project and skill content
|-- src/routes/            TanStack Start routes
|-- src/styles.css         Design system and global styles
`-- vite.config.ts
```

## Local Development

### Prerequisites

- Node.js 20 or newer
- npm

### Install and run

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production Cloudflare build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format the codebase with Prettier |

## Deployment

The `main` branch is connected to Cloudflare Workers. A successful push triggers the configured production build and deployment. The custom domain is managed through Cloudflare DNS.

Before deploying, verify that `npm run build` succeeds and that downloadable assets in `public/` are present.

## Content Updates

- Update projects and skill groups in `src/data/portfolio.ts`.
- Update page copy and section structure in `src/components/portfolio-page.tsx`.
- Replace CV and image assets without changing public links unless the corresponding references are updated.

## Author

Designed and developed by [Gayan Shaminda](https://github.com/Gayanshaminda).
