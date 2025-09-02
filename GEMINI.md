# GEMINI.md

## Project Overview

This is a portfolio website for "Madani Studio," a web design, AI, and software studio. The site is built with [Astro](https://astro.build/) and uses [React](https://react.dev/) for interactive components (islands). It features animations powered by [GSAP](https://gsap.com/) and smooth scrolling with [Lenis](https://lenis.darkroom.engineering/). The project is configured for deployment on Cloudflare Pages, as indicated by the `wrangler.toml` file.

The website has a modern, minimalist design with a focus on typography and smooth animations. It includes a home page, a projects page, and commented-out routes for "About" and "Contact" pages.

## Building and Running

The following commands are available to run the project:

*   `npm install`: Installs all the necessary dependencies.
*   `npm run dev`: Starts the local development server at `http://localhost:4321`.
*   `npm run build`: Builds the production-ready site to the `./dist/` directory.
*   `npm run preview`: Previews the production build locally before deploying.

## Development Conventions

### Project Structure

The project follows the standard Astro project structure:

*   `src/pages`: Contains the pages of the website. Each `.astro` file in this directory becomes a page.
*   `src/layouts`: Contains the main layout component, `Layout.astro`, which defines the overall HTML structure of the pages.
*   `src/components`: Contains reusable Astro components, such as the `Navbar.astro` and `Footer.astro`.
*   `src/islands`: Contains interactive React components that are client-side rendered. This project uses islands for a `CursorFollower` and for the animations on the projects page.
*   `public`: Contains static assets that are copied to the build output as-is.



### Animations

Animations are a key feature of this project. It uses:

*   **Astro View Transitions:** The `astro:transitions` client router is enabled in `src/layouts/Layout.astro` to provide smooth page transitions.
*   **GSAP:** The GreenSock Animation Platform is used for more complex animations, such as the cursor follower and the scroll-based animations on the projects page.
*   **Lenis:** Provides a smooth scrolling experience.

### Page Transitions

The project uses Astro's built-in View Transitions for page transitions. A custom page transition script using GSAP is also present in `src/scripts/page-transition-gsap.js`, but it is not currently being used in favor of the Astro View Transitions.

### Deployment

The presence of a `wrangler.toml` file suggests that the project is intended to be deployed on [Cloudflare Pages](https://pages.cloudflare.com/).
