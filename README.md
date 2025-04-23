# AI To Do List App

## 1. Overview

The AI To Do List App is a custom, single-user web application designed for personalized task and workflow management. It leverages AI to automate task categorization, enrichment, and provides intelligent assistance based on a detailed, predefined data structure specific to the user's needs (Jakub Cerulík).

This project aims to create a highly efficient, minimalist, and reliable alternative to generic task managers, focusing on a specific AI-assisted workflow without direct integration to external services like Asana.

**Core Features:**

*   Simple and fast task creation.
*   AI-powered auto-categorization and enrichment of task details based on user input and a predefined schema.
*   Clear hierarchical task view (Portfolio -> Project -> Section -> Task).
*   Detailed task view displaying all custom fields.
*   Contextual AI chat assistance (both globally and per-task).
*   Advanced filtering and sorting by any task field.
*   CSV data export.
*   Responsive design for desktop (Macbook) and mobile (iPhone).
*   **Task Viewing & Editing:** View detailed task information and edit fields directly on the task page (`/tasks/[id]`).
*   **Task Deletion:** Delete tasks individually from the task detail page or the main list view, with confirmation prompts. (Implemented 2025-04-22)
*   **CSV Import/Export:**
    *   Import tasks from a CSV file via an API endpoint (`/api/csv/import`).
    *   Export tasks to CSV with comprehensive field support.
    *   **[ENHANCED 2025-04-22]** CSV import now uses commas as column delimiters and semicolons for multi-select values.
    *   **[ENHANCED 2025-04-22]** CSV import supports user-provided task IDs and creates new tasks if IDs don't exist.

## 2. Tech Stack

*   **Framework:** Next.js (v14+ with App Router)
*   **Language:** TypeScript
*   **UI Library:** Shadcn/ui (using Radix UI + Tailwind CSS)
*   **Styling:** Tailwind CSS
*   **Database:** PostgreSQL
*   **ORM:** Prisma
*   **AI:** OpenAI API (GPT-4 / GPT-4o or similar)
*   **State Management:** React Context API / Zustand / Jotai (TBD based on complexity)
*   **(Potential):** Background job queue (e.g., Vercel Cron Jobs, BullMQ) for asynchronous AI tasks.

## 3. Project Structure

*   `/app`: Next.js App Router directory.
    *   `/api`: API routes.
    *   `/tasks`: Task list and detail pages.
*   `/components`: Reusable React components.
    *   `/ui`: Shared UI elements (potentially from Shadcn/ui).
*   `/config`: Project configuration files (`package.json`, `tailwind.config.ts`, `tsconfig.json`, `TASK_FIELD_CONFIG.ts`, etc.).
*   `/lib`: Shared utilities and libraries (e.g., `prisma.ts`, CSV helpers).
*   `/prisma`: Prisma schema (`schema.prisma`) and seeding script (`seed.ts`).
*   `/public`: Static assets.
*   `/tests`: Jest unit and integration tests.
*   `PRD.txt`: Product Requirements Document.
*   `PLANNING.md`: High-level development plan and architecture.
*   `TASK.md`: Detailed task breakdown and current status.
*   `DONE.md`: Log of completed milestones.
*   `PROJECTS_FILE_STRUCTURE_DOCUMENTATION.md`: Detailed explanation of the file structure.
*   `csv_field_documentation.md`: In-depth documentation for each task field, crucial for AI understanding.
*   `csv_input_form_documentation.md`: Guide on how to structure data for CSV import/task creation.
*   `csv_to_import.csv`: Sample CSV file for import testing.

## 4. Core Development Principles

*   **Single Source of Truth for Task Fields:** When building frontend components (forms, task displays, filters, etc.), **ALWAYS** import and utilize the constants, types, options, and labels defined in `config/TASK_FIELD_CONFIG.ts`. This file is the single source of truth for task field definitions. Avoid hardcoding dropdown options, labels, or validation logic directly in components. This ensures consistency across the UI and simplifies maintenance.
*   **Follow Documentation:** Adhere strictly to the guidelines and structure outlined in `PLANNING.md`, `PROJECTS_FILE_STRUCTURE_DOCUMENTATION.md`, and the requirements in `PRD.txt`.
*   **Modularity:** Build reusable components and keep code organized according to the defined project structure.
*   **Simplicity & MVP Focus:** Prioritize the simplest solution that meets the immediate requirement, building iteratively.

## 5. Migration Note

All files were reviewed and placed according to the latest documentation and project conventions. This ensures maintainability, clarity, and readiness for further development.

## 6. Next Steps

- Review and update all documentation and configuration files as the project evolves.
- Continue with Phase 1 tasks (Core Task Management features).
- Test and refine the enhanced task detail page with the new Select and MultiSelect components.
- Implement the remaining UI components and functionality described in TASK.md.
- Ensure all dependencies are installed and the project is runnable.

## 7. Recent Updates

- **2025-04-22:** Created custom Select and MultiSelect components for the task detail page
- **2025-04-22:** Enhanced the task detail page with proper input components for all field types
- **2025-04-22:** Setup Jest testing configuration for unit tests
- **2025-04-22:** Implemented comprehensive task deletion functionality with individual and batch operations
- **2025-04-22:** Created emergency task deletion system with direct database access for handling edge cases

## Recent Activity (2025-04-23)

*   Focused on debugging and fixing several React lifecycle errors (update during render, max update depth), hydration mismatches, and TypeScript type errors primarily affecting the filtering system (`FilterBar`, `HomePage`) and the task detail page (`TaskDetailPage`).
*   The application should now be more stable regarding these issues. Next steps involve testing these fixes.

## Getting Started

1.  **Prerequisites:**
    ```bash
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?schema=public"
    # Add any other necessary environment variables (e.g., API keys for AI services)
    ```

5.  **Run Database Migrations:**
    ```bash
    npx prisma migrate dev
    ```

6.  **(Optional) Seed the Database:** Populate the database with initial test data.
    ```bash
    npx prisma db seed
    ```

7.  **Run the Development Server:**

---

_Last updated: 2025-04-22 (Comprehensive task deletion system implementation)_
