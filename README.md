# Me-API Playground (Track A: Backend Assessment)

A minimal MERN playground that stores your own information in MongoDB and exposes it via an API + tiny React UI.

## Architecture
- **Backend**: Node.js + Express + Mongoose (MongoDB), with optional Basic Auth for write operations.
- **Database**: MongoDB (Atlas or local). See `.env.example`.
- **Frontend**: Vite + React. Consumes the API; lets you search by skill, list projects, and view your profile.
- **Hosting**: Suggest Render/Railway/Fly.io for the API and Vercel/Netlify for the client.

## Quickstart (Local)
### 1) Server
```bash
cd server
cp .env.example .env
# edit .env to set MONGODB_URI (Atlas or local Mongo)
npm install
npm run seed   # seeds with sample data (you)
npm run dev
# Health: GET http://localhost:5000/health  -> { status: "ok" }
```

### 2) Client
```bash
cd ../client
npm install
# point to your API:
echo 'VITE_API_URL=http://localhost:5000' > .env
npm run dev
# open http://localhost:5173
```

## API Overview
- `GET /health` → liveness check.
- `GET /profile` → read profile.
- `POST /profile` (basic-auth) → create/update profile.
- `PUT /profile` (basic-auth) → update/replace profile.
- `GET /projects?skill=<name>&q=<search>&limit=50` → list projects with filters.
- `POST /projects` (basic-auth) → create a project.
- `PUT /projects/:id` (basic-auth) → update a project.
- `GET /skills/top` → aggregated top skills across profile and projects.
- `GET /search?q=...` → search across projects and profile.

**CORS** is enabled and controlled via `CORS_ORIGIN` in `.env`.

## Database Schema
- **Profile**: name, email, summary, education[], work[], skills[], links{ github, linkedin, portfolio }.
- **Projects**: title, description, skills[], links{ demo, repo }.

See `/server/src/models` and `/server/src/seed/seed.js` for example data using your real details.

## Postman / curl
A Postman collection is included in `/postman/MeAPI.postman_collection.json`.
```bash
curl http://localhost:5000/projects?skill=Node.js
curl http://localhost:5000/search?q=React
```

## Deploying
- **API**: push `/server` to Render/Railway. Set env vars: `MONGODB_URI`, `PORT`, `CORS_ORIGIN`, `BASIC_AUTH_USER`, `BASIC_AUTH_PASS`.
- **Client**: push `/client` to Vercel/Netlify. Set `VITE_API_URL` env var to your deployed API URL.

## Known Limitations
- No pagination by default (easy to add with skip/limit).
- Simple Basic Auth for demo only (replace with JWT/OAuth in production).
- Single-profile assumption (stores one document; extend as needed).

## Resume Link
https://drive.google.com/file/d/1PTd1lk5wet9J_cUShMCBnSayYuuq5u5p/view?usp=drivesdk