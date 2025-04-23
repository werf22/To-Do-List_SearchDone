-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "task_id" TEXT,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at" TIMESTAMP(3),
    "last_modified_at" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "notes" TEXT,
    "task_comments" TEXT,
    "portfolio" TEXT[],
    "project" TEXT[],
    "section" TEXT[],
    "parent_task" TEXT,
    "parent_task_id" TEXT,
    "subtasks_for_user" TEXT,
    "subtasks_for_ai" TEXT,
    "subtasks_in_system" TEXT,
    "subtasks_id_in_system" TEXT,
    "dependents" TEXT,
    "dependents_id" TEXT,
    "outgoing_dependents" TEXT,
    "outgoing_dependents_id" TEXT,
    "related_tasks" TEXT,
    "related_tasks_id" TEXT,
    "tags" TEXT[],
    "priority" TEXT,
    "due_date" TIMESTAMP(3),
    "start_date" TIMESTAMP(3),
    "deadline_type" TEXT,
    "recurrence_frequency" TEXT,
    "assignee" TEXT,
    "type" TEXT,
    "collaborators" TEXT,
    "ai_workflow_status" TEXT NOT NULL DEFAULT '1 - Nová (v Inboxe)',
    "allow_autonomous_execution" TEXT NOT NULL DEFAULT 'Nie (Len Pripraviť / Vyžaduje Moju Akciu)',
    "ai_behavior_on_uncertainty" TEXT NOT NULL DEFAULT 'Pýtaj sa / Čakaj na Mňa',
    "ai_creativity_level" TEXT NOT NULL DEFAULT 'Stredná (Vyvážená)',
    "ai_processing_priority" TEXT NOT NULL DEFAULT 'Normálna',
    "ai_agent_status_log" TEXT,
    "number_of_variations" INTEGER,
    "feedback_for_ai" TEXT,
    "ai_output_rating" TEXT,
    "ai_output_result_link" TEXT,
    "action_required_from_user" TEXT,
    "task_goal" TEXT NOT NULL,
    "input_data_context" TEXT NOT NULL,
    "desired_output_format" TEXT[],
    "desired_style_tone" TEXT[],
    "specific_constraints_instructions" TEXT,
    "ai_action_process_free_text" TEXT,
    "ai_action_process_dropdown" TEXT[],
    "ai_brainstorm_ideas_on_how_it_can_help_me" TEXT,
    "task_type" TEXT,
    "estimated_user_time" TEXT,
    "cognitive_load" TEXT,
    "energy_level_required" TEXT,
    "required_tools_software" TEXT[],
    "required_hardware" TEXT[],
    "required_skills" TEXT[],
    "location" TEXT,
    "execution_location" TEXT,
    "required_devices" TEXT[],
    "internet_requirement" TEXT,
    "focus_requirement" TEXT,
    "optimal_time_of_day" TEXT[],
    "related_portfolios" TEXT[],
    "related_projects" TEXT[],
    "related_sections" TEXT[],
    "related_entities" TEXT[],
    "target_audience" TEXT,
    "task_purpose" TEXT,
    "expected_impact_success_metric" TEXT,
    "waiting_for" TEXT,
    "estimated_cost_budget" DOUBLE PRECISION,
    "financial_return_value_speed" TEXT,
    "financial_aspect" TEXT DEFAULT 'Žiadny',
    "suggested_initial_steps_subtasks" TEXT,
    "related_areas_for_ai_to_consider" TEXT,
    "potential_dependencies_related_tasks" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_task_id_key" ON "Task"("task_id");

-- CreateIndex
CREATE INDEX "Task_ai_workflow_status_idx" ON "Task"("ai_workflow_status");

-- CreateIndex
CREATE INDEX "Task_priority_idx" ON "Task"("priority");

-- CreateIndex
CREATE INDEX "Task_due_date_idx" ON "Task"("due_date");

-- CreateIndex
CREATE INDEX "Task_portfolio_idx" ON "Task"("portfolio");

-- CreateIndex
CREATE INDEX "Task_project_idx" ON "Task"("project");

-- CreateIndex
CREATE INDEX "Task_section_idx" ON "Task"("section");
