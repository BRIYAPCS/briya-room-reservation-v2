# Frontend Architecture — Briya Room Reservation v2

## Folder Responsibilities

### pages/
Route-level components only.
- No API calls
- No business logic

### components/
Reusable UI components.
- Stateless where possible
- No direct fetch calls

### services/
API communication layer.
- All HTTP requests live here
- No UI logic

### hooks/
Reusable React hooks.
- Compose logic
- No side effects beyond React state

### policies/
Centralized UI and calendar rules.
- Slot duration
- UI constraints
- Feature flags

### utils/
Pure helper functions.
- No React imports
- No side effects

## Hard Rules
- No fetch() outside services/
- No date math in JSX
- Backend is source of truth
- Violations require refactor, not exceptions
