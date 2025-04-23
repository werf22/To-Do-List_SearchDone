# AI To Do List App - Development Tasks

## Explanation:

*   **Structure:** Organizes tasks logically by the development phases defined in PLANNING.md.
*   **Checkboxes:** Uses Markdown checkboxes ([ ], [x]) to clearly track completed versus pending tasks.
*   **Granularity:** Tasks are broken down into manageable steps within each phase (e.g., backend logic, frontend component creation, API endpoint implementation).
*   **Clarity:** Describes what needs to be done for each task.
*   **Current Focus:** Clearly highlights the next immediate phase and tasks.
*   **Backlog:** Provides a place to capture future ideas without cluttering the main plan.

## Overall Goal

Create a custom AI-powered Task Management web application based on the specifications in `PRD.txt` and the data model defined in `config/TASK_FIELD_CONFIG.ts` and `prisma/schema.prisma`.

## Current Status

*   **Phase 0: Foundation** is largely complete.
*   **Database Setup Complete:** PostgreSQL database created and configured with Prisma.
*   **Initial Migration Complete:** Database schema initialized from prisma/schema.prisma.
*   **Seeding Script Created:** `prisma/seed.ts` added for populating test data.
*   **Core Documentation Refined:** `csv_field_documentation.md` and `csv_input_form_documentation.md` updated.
*   **Testing Setup:** Jest configured for unit testing.
*   **CSV Import Enhancements Complete:** Updated import functionality to use commas as column delimiters and semicolons as multi-select value delimiters. Added support for user-provided task IDs.
*   **Filter System Fix Complete:** Fixed issue with default filters preventing tasks from displaying on page load.
*   **React/TypeScript Error Fixes Complete:** Resolved several issues related to state updates, hydration, component rendering, and type safety in `FilterBar`, `TaskDetailPage`, and `HomePage`.
*   **Next Steps:** Continue implementing Phase 1 UI Enhancements and Phase 2 Core Features.

---

## Task Breakdown by Phase

**Phase 0: Foundation (Core MVP)**

*   [x] Finalize `PRD.txt` requirements document.
*   [x] Define core data structure in `config/TASK_FIELD_CONFIG.ts`.
*   [x] Define database schema in `prisma/schema.prisma`.
*   [x] Set up Next.js project with TypeScript, Tailwind CSS.
*   [x] Install Prisma and configure database connection (`DATABASE_URL` in `.env`).
*   [x] Create database utility `lib/prisma.ts`.
*   [x] Set up PostgreSQL database with proper user and privileges.
*   [x] Run initial Prisma migration (`npx prisma migrate dev`).
*   [x] Create database seeding script (`prisma/seed.ts`).
*   [x] Refine core documentation (`csv_field_documentation.md`, `csv_input_form_documentation.md`).
*   [x] Create basic API route `app/api/tasks/route.ts` with:
    *   [ ] `GET` handler to fetch all tasks.
    *   [ ] `POST` handler to create a new task (accepting minimal fields: name, goal, context, optional: portfolio, priority, due_date).
*   [x] Create main frontend page `app/page.tsx`.
*   [x] Create frontend component `components/TaskForm.tsx` for adding tasks.
*   [x] Create frontend component `components/TaskList.tsx` for displaying tasks.
*   [x] Move all files to correct structure as per documentation.

**Phase 1: Core Task Management**

*   [x] API: Implement single task endpoints in `app/api/tasks/[id]/route.ts`:
    *   [x] `GET` handler to fetch a specific task by ID.
    *   [x] `PATCH` handler to update a specific task.
*   [x] Frontend: Create detailed task view page `app/tasks/[id]/page.tsx`.
*   [x] Frontend: Implement editing functionality for all task fields.
*   [x] Frontend: Create custom Select and MultiSelect components for dropdown fields.
*   [x] Frontend: Enhance task detail view with proper input components for all field types.
*   [x] Frontend: Enhance TaskList with clear status indicators and formatting.
*   [x] Frontend: Add clickable links from task list to detailed view.
*   [x] Frontend: Add filtering capabilities for tasks (portfolio, project, status, priority).
*   [x] Data Management: Implement CSV import/export functionality.
*   [x] UI: Make the interface fully responsive.
*   [x] UX: Add loading states and error handling.
*   [x] Frontend: Implement task deletion for individual and batch operations.
*   [x] Backend: Create dedicated task deletion endpoints and emergency deletion features.
*   [ ] UX: Add toast notifications for actions.
*   [x] Testing: Add comprehensive unit and integration tests.
*   [x] Thoroughly test filtering (FilterBar, AdvancedFilters) and task detail page functionality after recent error fixes.

**Phase 2: UI Enhancements & Core Features**

*   [ ] Backend: Implement AI enrichment service and integrate with task creation.
*   [ ] API: Add AI trigger to POST /api/tasks.
*   [ ] Backend: Create AI workflow processing system.
*   [ ] Frontend: Create AI settings and controls panel.
*   [x] Frontend: Implement Task Hierarchy TreeView.
*   [ ] Frontend: Implement sorting functionality for task lists.
*   [ ] Backend/Scripting: Create a database seeding script (`prisma/seed.ts`) to populate the DB with realistic test data (portfolios, projects, sections, tasks, subtasks).
*   [ ] UX: Add toast notifications for actions.
*   [ ] Testing: Add comprehensive unit and integration tests.

**Phase 3: Advanced Features & AI Interaction**

*   [ ] Frontend: Create basic AI Chat Interface (`components/AIChatInterface.tsx`).
*   [ ] Backend: Implement basic API endpoint for AI chat interaction (`app/api/ai/chat/route.ts`).
*   [ ] Frontend: Create dashboard with task statistics.
*   [ ] Frontend: Add customizable views/layouts.
*   [x] Backend: Implement full text search across tasks.
*   [ ] API: Create endpoints for batch operations.
*   [ ] Frontend: Add keyboard shortcuts for power users.
*   [ ] Backend: Implement more sophisticated background processing.
*   [ ] UX: Implement drag-and-drop for task organization.
*   [ ] System: Add performance optimizations.

---

## Current Tasks / In Progress

*   **UI/UX Refinements:** Continue general improvements to layout, styling, and user interaction based on `TASK_FIELD_CONFIG` and feedback.
*   **FilterBar Enhancements:** Further refine filter interactions, possibly adding more advanced filter types or improving existing ones.

## Recently Completed (to be moved to DONE.md upon verification)

*   **[COMPLETED & DEBUGGED 2025-04-23] Comprehensive Task Search & Reset:**
    *   Implemented backend raw SQL search in `/api/tasks/route.ts` to handle searching across diverse field types (text, boolean, dropdowns, etc.).
    *   Integrated search input into `FilterBar.tsx`.
    *   Fixed backend boolean search logic to prevent type errors.
    *   Implemented Filter Reset functionality in `FilterBar.tsx`.
    *   Debugged frontend state management issues in `FilterBar.tsx` and `app/page.tsx` (`handleFilterChange`) to ensure search terms are correctly added and removed from the filter state, resolving issues where clearing the search or resetting filters did not properly update the task list.
*   **Task Tree View:** Implemented `/components/task-tree.tsx` to display tasks hierarchically.

---

## Migration Log

* 2025-04-22: Database setup completed with PostgreSQL user `aitodolist_user` and database `aitodolist_db`. Initial schema migration successful.
* 2025-04-22: Created custom Select and MultiSelect components to enhance the task detail page UI, enabling proper dropdown and multi-select functionality for fields like Portfolio, Project, Section, Tags, and more.
* 2025-04-22: Implemented reliable task deletion functionality with multiple approaches:
  * Added individual task delete buttons within the task list
  * Enhanced batch delete operations in the task list
  * Created a specialized emergency deletion page (/nuke-tasks) for handling edge cases
  * Added force-delete endpoint that uses raw SQL when needed for maximum reliability

---

## Backlog / Future Ideas

*   User Authentication / Authorization.
*   More sophisticated AI interactions (e.g., AI proposing field updates for user approval).
*   Dashboard view with summaries/stats.
*   Customizable views/layouts.
*   Notifications system (e.g., for tasks requiring user action).
*   Integration with Calendar APIs.
*   AI fine-tuning based on user feedback (`AI Output Rating`, `Feedback for AI`).
*   More robust background job system for AI tasks (e.g., BullMQ, Redis).
*   Full text search across tasks.
*   Mobile app version.
*   Integration with third-party productivity tools.
*   Time tracking for tasks.

### CSV Functionality (`/lib/csvUtils.ts`, `/app/api/csv`)

*   [X] `POST /api/csv/import` - Implement CSV import functionality.
*   [ ] `GET /api/csv/export` - Implement CSV export functionality.

### AI Integration (Placeholder - Phase 2/3)

*   [ ] Define AI agent interaction points (e.g., chat interface, background processing).
*   [ ] Select/Integrate AI model/service.
*   [ ] Implement AI logic for field population/task assistance.

### Frontend (`/app`, `/components` - Placeholder - Phase 1.5/2)

*   [ ] Basic Task List Display Component.
*   [ ] Basic Task Detail View Component.
*   [ ] Basic Task Creation Form Component (Based on `csv_input_form_documentation.md`).
*   [ ] Connect Frontend components to API endpoints.

### Testing

*   [ ] Add unit tests for API endpoints (CRUD).
*   [ ] Add unit tests for CSV Utils.
*   [ ] Add integration tests (if feasible).

### Documentation & Refinement

*   [ ] Add detailed JSDoc comments to all functions/modules.
*   [ ] Refine Prisma schema based on testing/development (`schema.prisma`).
*   [ ] Refine Task Field Configuration (`TASK_FIELD_CONFIG.ts`).
*   [X] Update project documentation (`README.md`, `PLANNING.md`, `TASK.md`, `DONE.md`, `PROJECTS_FILE_STRUCTURE_DOCUMENTATION.md`) - *Ongoing*