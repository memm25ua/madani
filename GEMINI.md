### Project Overview

This project is a personal web portfolio built with [Astro](https://astro.build/). It uses [GSAP](https://greensock.com/gsap/) for animations and features a CV section with data sourced from a `cv.json` file. The main goal is to create a modern, animated, and professional online presence.

### Main Technologies

-   **Framework**: [Astro](https://astro.build/)
-   **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
-   **Deployment**: The project is intended to be deployed as a static site.

### Building and Running

To get started with this project, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    This will start a local development server at `http://localhost:4321`.
3.  **Build for Production**:
    ```bash
    npm run build
    ```
    This will create a `dist/` directory with the production-ready files.
4.  **Preview the Production Build**:
    ```bash
    npm run preview
    ```

### Development Conventions

-   **CV Data**: All professional and personal information is stored in `cv.json`. To update the content of the portfolio, this is the primary file to modify.
-   **Styling**: The project uses standard CSS with a focus on modern design principles.
-   **Components**: Reusable UI elements are located in the `src/components/` directory.
-   **Layouts**: The main page structure is defined in `src/layouts/Layout.astro`.

### Next Steps

-   Implement GSAP animations to enhance the user experience.
-   Create a visually appealing and responsive design for the portfolio.
-   Deploy the final version to a hosting service like Netlify or Vercel.

### Docker Setup

This project includes a `Dockerfile` and `docker-compose.yml` for running the application in a containerized environment.

**Building and Running with Docker:**

1.  **Build and Run:**
    ```bash
    docker-compose up
    ```
2.  **Build and Run in Detached Mode:**
    ```bash
    docker-compose up -d
    ```

The application will be available at `http://localhost:4321`.
