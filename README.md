# Academic Cover Page Generator

This project is a modern full-stack cover page generator built with React, Vite, Express, and SQLite.

## Architecture

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: SQLite managed through a lightweight local database file

## Features

- Live cover page preview
- Multiple templates
- Logo upload support
- Save and load cover drafts
- Download / print-ready PDF output using browser print styling

## Local Development

Install dependencies and start both client and server:

```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`.

## Production

Build the frontend with:

```bash
npm run build
```

Start the backend with:

```bash
npm start
```

The API listens on port `4000` by default.
