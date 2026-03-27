# SPEC.md — Simple Task List

## Product Overview
A lightweight, single-page task management app that lets users add, complete, and delete tasks without any authentication. All task data is persisted in Supabase, so the list is restored on every page load. No accounts, no login — just a clean, functional to-do list.

---

## User Stories

| # | As a user, I want to… | So that… |
|---|---|---|
| US-1 | Add a new task by typing a title and submitting | I can track things I need to do |
| US-2 | Mark a task as complete | I know what I've finished |
| US-3 | Mark a completed task as incomplete | I can reopen a task if needed |
| US-4 | Delete a task permanently | I can remove tasks I no longer need |
| US-5 | See my tasks automatically on page load | My list is preserved across sessions |

---

## Acceptance Criteria

- **Add:** Submitting a non-empty title creates a task; empty submissions are rejected with inline validation.
- **Complete:** Clicking a checkbox/button sets `is_complete = true`; task appears visually distinct (e.g. strikethrough).
- **Uncomplete:** Clicking the same control on a completed task sets `is_complete = false`; task returns to active styling.
- **Delete:** Clicking delete removes the task from the DB and UI immediately; no confirmation required.
- **Persist on load:** On initial page load, all tasks are fetched from Supabase and rendered in `created_at` descending order.
- **Single page:** No routing, no auth, no modals — all interactions happen inline.

---

## UI Wireframe Description

```
┌─────────────────────────────────────────┐
│           📝  My Task List              │
├─────────────────────────────────────────┤
│  [ Task title input...    ] [ Add ]     │
├─────────────────────────────────────────┤
│  ☐  Buy groceries                  [🗑] │
│  ☑  Call dentist (strikethrough)   [🗑] │
│  ☐  Fix the CI pipeline            [🗑] │
└─────────────────────────────────────────┘
```

- Top: App title/header
- Input row: text field + Add button (full-width on mobile)
- Task list: each row has a checkbox (toggle complete), task title, and delete button
- Completed tasks shown with strikethrough + muted colour
- Responsive; works on mobile

---

## Data Model

**Table: `tasks`**

| Column | Type | Constraints |
|---|---|---|
| `id` | `uuid` | PRIMARY KEY, default `gen_random_uuid()` |
| `title` | `text` | NOT NULL |
| `is_complete` | `boolean` | NOT NULL, default `false` |
| `created_at` | `timestamptz` | NOT NULL, default `now()` |

---

## Out of Scope

- User authentication or accounts
- Multiple lists / list organisation
- Task editing (title changes after creation)
- Due dates, priorities, or tags
- Real-time sync / multi-user collaboration
- Offline support / service workers
- Backend API layer (app calls Supabase directly)
- Mobile native apps
