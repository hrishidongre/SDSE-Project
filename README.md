# Deepa's Vision

Deepa's Vision is a full-stack Vedic astrology application with a Next.js frontend, Node.js and Express backend, and MongoDB database.

## Overview

- User authentication using JWT
- Profile management for birth details
- Birth chart generation and storage
- Dosha report generation and storage
- Role-based access support for user and admin

## Tech stack

### Frontend
- Next.js
- React
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Joi

## Project structure

```
Backend/
  astrology-api/
Frontend/
Diagrams/
```

## Backend setup

1. Go to backend folder:

```bash
cd Backend/astrology-api
```

2. Install dependencies:

```bash
npm install
```

3. Create local env file:

```bash
cp .env.example .env
```

4. Start backend:

```bash
npm run dev
```

Backend runs on `http://localhost:5001`.

## Frontend setup

1. Go to frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create local env file:

```bash
cp .env.local.example .env.local
```

4. Start frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:3000`.

## Environment variables

### Backend (`Backend/astrology-api/.env`)

- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `VEDIC_ASTRO_API_KEY`
- `VEDIC_ASTRO_BASE_URL`
- `FREE_ASTRO_API_KEY`
- `FREE_ASTRO_BASE_URL`

### Frontend (`Frontend/.env.local`)

- `NEXT_PUBLIC_API_BASE_URL`

## Main API routes

- `POST /api/auth/signup`
- `POST /api/auth/signin`
- `POST /api/profile/create`
- `GET /api/profile`
- `POST /api/birth-chart/generate`
- `GET /api/birth-chart/user`
- `GET /api/dosha/types`
- `POST /api/dosha/check`

## Notes

- MongoDB must be running before starting backend.
- Chart generation depends on external astrology API availability and quota.
