## Detailed Directory & File Explanations

---

### `/app` - Next.js App Router Core
*   Contains all routing, page UI, layouts, and API endpoint logic as defined by the Next.js App Router convention.
    *   `/app/page.tsx` - Main home page with task list, filters, and task creation form
    *   `/app/tasks/[id]/page.tsx` - Task detail page with full editing capabilities. Displays task details and allows editing and deletion. Fetches data using the task ID from the URL. Includes form handling, state management, and interaction with the `/api/tasks/[id]` endpoint (GET, PATCH, DELETE). (Delete functionality added/verified 2025-04-22)
    *   `/app/api/tasks/route.ts` - API endpoints for listing and creating tasks
    *   `/app/api/tasks/[id]/route.ts` - API endpoints for individual task operations (get, update, delete). Handles API requests for a specific task ID. Implements:
        *   `GET`: Retrieve details for a specific task.
        *   `PATCH`: Update details of a specific task.
        *   `DELETE`: Delete a specific task. (Verified & Used: 2025-04-22)
    *   `/app/api/tasks/batch/route.ts` - API endpoints for batch operations on multiple tasks
    *   `/app/api/force-delete/route.ts` - Emergency endpoint with direct database access for troubleshooting

### `/components` - UI Components
*   All reusable UI components (forms, lists, field displays, etc.).
    *   `DeleteTaskButton.jsx` - Component for deleting tasks
    *   `FilterBar.tsx` - Component for filtering tasks by various criteria
    *   `ImportCSVModal.tsx` - Modal dialog for importing tasks from CSV files
    *   `SimpleTaskList.jsx` - Simple component for displaying tasks in a list format
    *   `TaskForm.tsx` - Component for adding new tasks
    *   `TaskList.tsx` - Component for displaying tasks in a tabular format. Displays a list of tasks, potentially with sorting, filtering, and actions like selection and deletion. Interacts with task API endpoints. (Delete functionality updated to use `DELETE /api/tasks/[id]` 2025-04-22)
    *   `/ui/Select.tsx` - Reusable dropdown component with search functionality
    *   `/ui/MultiSelect.tsx` - Reusable multi-select component with checkboxes for selecting multiple options

### `/config` - Configuration & Setup Files
*   Stores all configuration files for the app, including:
    *   `TASK_FIELD_CONFIG.ts` — Core field definitions
    *   `.env.local` — Environment variables
    *   `next.config.mjs` — Next.js config
    *   `package.json` — Dependencies & scripts
    *   `postcss.config.js` — PostCSS config
    *   `tailwind.config.ts` — Tailwind config
    *   `tsconfig.json` — TypeScript config
    *   `.windsurfrules` — Project rules

### `/lib` - Library Code
*   Utility code, database clients, and shared logic.
    *   `prisma.ts` - Prisma client singleton for database operations
    *   `csvExport.ts` - Utilities for exporting tasks to CSV
    *   `csvImport.ts` - Utilities for importing tasks from CSV. Modified on 2025-04-22 to use commas as column delimiters and semicolons as multi-select value delimiters. Added support for user-provided task IDs and improved error handling.

### `/pages` - Legacy Pages Router (Special Pages)
*   Contains standalone emergency/utility pages using the Next.js Pages Router.
    *   `/pages/nuke-tasks.js` - Emergency task deletion page for troubleshooting

### `/prisma` - Database Schema & Migrations
*   Prisma ORM configuration and database schema management.
    *   `migrations/` - Database migration files
    *   `schema.prisma` - Database schema definition
    *   `seed.ts` - Script to populate database with initial data

### `/public` - Static Assets
*   Static files served directly by the web server (images, fonts, etc.).

### `/tests` - Unit Tests
*   Example unit test files
    *   `csvUtils.test.ts` - Example unit test file

### Root Files
*   Documentation and planning files (`README.md`, `PRD.txt`, `PLANNING.md`, `TASK.md`, `DONE.md`, this file, etc.).
*   Environment variables and configuration files
    *   `.env` - Environment variables (ignored by Git)
    *   `.gitignore` - Git ignore file
    *   `jest.config.js` - Jest configuration
    *   `jest.setup.ts` - Jest setup file (e.g., for mocks)

---

### Current File Structure
```
/
├── app/
│   ├── api/
│   │   ├── force-delete/
│   │   │   └── route.ts
│   │   └── tasks/
│   │       ├── [id]/
│   │       │   └── route.ts
│   │       ├── batch/
│   │       │   └── route.ts
│   │       └── route.ts
│   ├── tasks/
│   │   └── [id]/
│   │       └── page.tsx
│   └── page.tsx
├── components/
│   ├── DeleteTaskButton.jsx
│   ├── FilterBar.tsx
│   ├── ImportCSVModal.tsx
│   ├── SimpleTaskList.jsx
│   ├── TaskForm.tsx
│   ├── TaskList.tsx
│   └── ui/
│       ├── MultiSelect.tsx
│       └── Select.tsx
├── config/
│   ├── TASK_FIELD_CONFIG.ts
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── .windsurfrules
├── lib/
│   ├── csvExport.ts
│   ├── csvImport.ts
│   └── prisma.ts
├── pages/
│   └── nuke-tasks.js
├── prisma/
│   ├── migrations/
│   │   └── ... (migration files)
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   └── [static assets]
├── tests/
│   └── csvUtils.test.ts
├── .env
├── .gitignore
├── jest.config.js
├── jest.setup.ts
├── DONE.md
├── PLANNING.md
├── PRD.txt
├── PROJECTS_FILE_STRUCTURE_DOCUMENTATION.md
├── README.md
└── TASK.md
```

### File Management Log
*   [2025-04-22 16:28] Refined documentation in `csv_field_documentation.md` and `csv_input_form_documentation.md`.
*   [2025-04-22 16:28] Added `prisma/seed.ts` for database seeding.
*   [2025-04-22 14:39] Implemented comprehensive task deletion system with:
    * New API endpoints (`/api/tasks/[id]`)
    * Emergency deletion page (`/pages/nuke-tasks.js`)
    * Enhanced TaskList component with integrated delete buttons

_Last updated: 2025-04-22 16:28_
