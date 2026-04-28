# Day 23 - CORS, Error Handling & Debugging

## Features
- Fetch data from API with error handling
- 404 page for unknown routes
- Error Boundary for render errors
- Toast notifications for success/error
- Skeleton screen for loading state
- Retry button on failed requests

## Concepts Covered
- CORS: Browser blocks cross-origin requests. Fixed using Vite proxy in development.
- try/catch: Used for all async fetch calls
- res.ok: Checked manually because fetch does not throw on 404/500
- Error Boundary: Class component that catches render errors in children
- Loading states: Skeleton shown while data is loading

## How to Run
npm install
npm run dev