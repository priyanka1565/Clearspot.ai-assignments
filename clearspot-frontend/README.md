# Frontend Engineer – Technical Assessment  
**ClearSpot.ai | Stage 2**

## Overview

This repository contains my submission for the **Frontend Engineer – Stage 2 Technical Assessment** at **ClearSpot.ai**.

The project demonstrates:
- API integration using React and TypeScript
- Real-time data handling with WebSockets
- Proper error handling and UX patterns
- Clean, scalable, production-ready frontend code

---

## Tech Stack

- React 18
- TypeScript
- Vite
- @tanstack/react-query
- WebSocket API
- Custom CSS (no UI framework)

---

## Project Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd <project-folder>

2. Install dependencies
npm install

3. Run the project
npm run dev

Project Structure
src/
├── api/
│   ├── apiClient.ts        # Reusable API client
│   └── types/              # Shared TypeScript types
├── hooks/
│   ├── useSites.ts         # Paginated data fetching
│   └── useWebSocket.ts     # WebSocket hook
├── components/
│   ├── SiteList.tsx        # Paginated site listing UI
│   ├── CreateSite.tsx      # Optimistic update form
│   └── ErrorBoundary.tsx   # Global error boundary
├── styles/
│   └── SiteList.css        # Application styling
└── main.tsx

Implemented Features
Part 1: API Integration

Reusable API client with GET, POST, PUT, DELETE methods

Centralized error handling

Integrated with React Query

Fully typed with TypeScript

Part 2: Real-Time Data Handling

Custom WebSocket hook

Handles connection lifecycle and reconnection

Real-time updates rendered in UI

Part 3: Error Handling & UX

Global Error Boundary

User-friendly error messages

Loading and disabled states

Optimistic UI updates with rollback on failure

Part 4: Code Quality

Clean separation of concerns

No unnecessary any usage

Readable and maintainable code

Production-style UI layout

UI & UX Decisions

Card-based layout inspired by real SaaS dashboards

Stable pagination with fixed page size

Skeleton loaders for better perceived performance

Disabled button states for better usability

Assumptions

Backend pagination was not available, so client-side pagination was implemented to mimic server-side behavior.

WebSocket events follow a predefined structure.

Authentication flow is simplified for demonstration purposes.

Known Limitations

Pagination is client-side

WebSocket server is mocked / public

Limited automated test coverage due to time constraints

Submission Notes

Time spent: ~4–6 hours

Focused on correctness, clarity, and real-world patterns

Code is structured to be easily extendable

Final Checklist

 API integration completed

 Pagination working correctly

 Real-time updates implemented

 Error handling and UX improvements added

 TypeScript-safe codebase

 Clear README with setup instructions

Candidate: Priyanka Ingle
Role: Frontend Engineer
Company: ClearSpot.ai
