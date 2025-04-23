# AI To Do List App - Development Plan & Architecture Notes

## 1. Overall Philosophy

*   **Simplicity First:** Prioritize the simplest solution that meets the core requirements defined in `PRD.txt`. Avoid premature optimization or over-engineering.
*   **Iterative Development:** Build the application in phases, starting with an MVP and progressively adding features (especially complex AI integrations).
*   **Single Source of Truth:** `TASK_FIELD_CONFIG.ts` and `schema.prisma` are the definitive sources for the data model. Keep them synchronized.
*   **Focus on Core Workflow:** Ensure the basic workflow of Task Creation -> AI Enrichment -> Viewing -> Interaction -> Completion is solid before adding advanced features.
*   **Backend-Driven AI:** AI logic (prompting, API calls) should primarily reside in the backend (API routes or dedicated services) to keep the frontend clean and manage API keys securely.
*   **Asynchronous AI:** AI processing (especially auto-categorization) should happen asynchronously after task creation to avoid blocking the UI.

## 2. Development Phases (High-Level)

**Phase 0: Foundation (Current MVP Definition)**

*   **Goal:** Establish the core data structure, database connection, basic UI for adding and viewing tasks.
*   **Key Deliverables:**
    *   Finalized `TASK_FIELD_CONFIG.ts`
    *   Finalized `schema.prisma`
    *   `lib/prisma.ts` (DB Client)
    *   `app/api/tasks/route.ts` (Basic GET/POST handlers)
    *   `app/page.tsx` (Main page structure)
    *   `components/TaskForm.tsx` (Simple form for core fields)
    *   `components/TaskList.tsx` (Simple list display)
    *   Basic project setup (Next.js, TypeScript, Prisma, Tailwind).
    *   Database migration.
*   **Outcome:** User can add a task with Name, Goal, Context, etc., and see it listed. *No AI integration yet.*

**Phase 1: AI Auto-Enrichment & Basic Display**

*   **Goal:** Implement the core AI functionality for automatically populating task fields after creation. Display *all* fields in a read-only detail view.
*   **Key Deliverables:**
    *   Backend logic/service for AI auto-categorization and enrichment triggered after `POST /api/tasks`.
        *   Requires robust prompt engineering based on `TASK_FIELD_CONFIG`.
        *   Logic to parse structured AI output (JSON) and update the task in the DB.
        *   Update `ai_workflow_status` appropriately.
    *   `app/tasks/[id]/page.tsx` (Task Detail Page - initially read-only).
    *   Component to display all task fields based on `TASK_FIELD_CONFIG`.
    *   Update `TaskList` component to link to the detail page.
    *   Basic visual indication of `ai_workflow_status` in lists/details.
*   **Outcome:** User creates a task, AI fills most fields automatically, user can view all details.

**Phase 2: Basic Editing & Filtering**

*   **Goal:** Allow manual editing of task fields and implement basic filtering.
*   **Key Deliverables:**
    *   Enable editing functionality on the Task Detail Page (using `TASK_FIELD_CONFIG` to render correct inputs).
    *   `PATCH /api/tasks/[id]` endpoint in the backend to handle updates.
    *   Simple filtering UI (e.g., dropdowns for Portfolio, Project, Status, Priority) on the main task list page.
    *   Update `GET /api/tasks` backend logic to handle filter parameters.
*   **Outcome:** User can manually correct/adjust task data and filter the main list based on key criteria.

**Phase 3: Hierarchical View & Task-Specific Chat**

*   **Goal:** Implement the Portfolio -> Project -> Section -> Task tree view and the contextual AI chat within a task.
*   **Key Deliverables:**
    *   Tree View UI Component.
    *   Backend logic to fetch data structured for the tree view (or frontend logic to restructure flat data).
    *   Chat UI Component.
    *   `POST /api/ai/chat/task/[id]` endpoint.
    *   Backend logic to fetch task context, call AI with chat history + context, and return response.
    *   Mechanism to store/display chat history (potentially using `task_comments` field).
*   **Outcome:** User can navigate the hierarchy and get AI help specific to one task.

**Phase 4: Advanced Features & Polish**

*   **Goal:** Implement global chat, advanced filtering, CSV export, and general UI/UX improvements.
*   **Key Deliverables:**
    *   Global AI Chat UI and `POST /api/ai/chat/global` endpoint.
    *   Backend logic for interpreting global commands (querying, updating tasks).
    *   Advanced Filtering UI (multi-field, operators).
    *   Update `GET /api/tasks` to handle complex filter combinations.
    *   CSV Export functionality (backend endpoint or client-side generation).
    *   Mobile responsiveness improvements.
    *   User experience refinements (loading states, feedback, animations).
    *   Potential addition of user authentication if needed.
*   **Outcome:** Fully featured application matching the PRD.

## 3. Key Architectural Decisions (MVP Focus)

*   **Monorepo/Monolith:** Keep Frontend and Backend within the same Next.js project for simplicity.
*   **Serverless Deployment:** Target Vercel (or similar) for easy deployment and scaling of Next.js apps and API routes.
*   **Managed Database:** Use a managed PostgreSQL provider (Supabase, Neon, Vercel Postgres) to simplify database administration.
*   **Prisma:** Use Prisma for type-safe database access and migrations.
*   **Single Task Table:** Stick to the single `Task` table model as defined in `schema.prisma` for initial simplicity, handling relationships via stored IDs/text rather than database foreign keys. This simplifies development and CSV export but makes complex relational queries harder (acceptable trade-off for MVP).
*   **Tailwind CSS:** Use utility-first CSS for rapid UI development.
*   **Component Library (Shadcn/ui):** Leverage pre-built, accessible components to speed up UI development while maintaining flexibility.

## 4. Potential Challenges & Risks

*   **AI Prompt Engineering:** Getting the AI to reliably parse input and populate *all* fields correctly and consistently will require significant prompt tuning and iteration. The structure of `TASK_FIELD_CONFIG` is crucial here.
*   **AI Cost & Rate Limits:** Frequent AI calls (especially for auto-enrichment) can incur costs and hit API rate limits. Need to monitor and potentially implement caching or batching.
*   **Database Performance:** As the number of tasks grows, complex filtering/sorting on the single table (especially on text or array fields) might become slow. Database indexing is critical. A switch to a more normalized schema might be needed later.
*   **UI Complexity:** Displaying and editing potentially ~70+ fields per task requires careful UI design to avoid overwhelming the user. The Task Detail page needs logical grouping/sectioning. Advanced filtering UI can also become complex.
*   **State Management:** Managing frontend state (tasks, filters, loading/error states, chat history) might become complex. Choose a simple state management library (Zustand/Jotai) if React Context becomes unwieldy.
*   **Synchronization:** Keeping `TASK_FIELD_CONFIG`, `schema.prisma`, frontend components, and backend logic perfectly aligned requires discipline.

## 5. Next Steps (After Phase 0 / MVP)

*   Implement the backend AI service/wrapper for auto-enrichment.
*   Develop the Task Detail page (`app/tasks/[id]/page.tsx`).
*   Implement basic task editing and the `PATCH` API route.
*   Start working on basic filtering.