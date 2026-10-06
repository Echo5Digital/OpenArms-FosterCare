# Open Arms Foster Care

The Open Arms website and its lead-capture backend. Two separate deployments that live in one repository:

```
frontend/   The website (Next.js). Deployed on Vercel.
backend/    The API server (Node + Hono): MongoDB, form submissions, admin login, the leads dashboard's data. Deployed on Render.
shared/     A little code both sides use (lead types, labels and date formatting). No server code, no secrets.
```

## How the pieces fit

```
 visitor's browser ──► website on Vercel ──(server to server, with BACKEND_API_KEY)──► backend on Render ──► MongoDB
```

Browsers only ever talk to the website. The website's own server calls the backend, so the backend needs no CORS and the
admin login cookie stays on the website's domain.

- **Forms:** the website's forms post to `/api/leads` on the website. That route checks the request came from the site and
  passes it on to the backend, which rate-limits, validates and saves it.
- **Dashboard (`/admin`):** the website signs the admin in through the backend, which hands back a signed login token.
  The website keeps it in an HttpOnly cookie and sends it with every dashboard request; the backend checks it each time
  (so an admin removed on the Users page loses access straight away).
- **The CSV download** is also fetched from the backend through the website.

Only the website can use the backend: every request must carry the shared secret `BACKEND_API_KEY`.

## Settings (environment variables)

Each side has its own file. Neither is committed to git; copy the `.env.example` next to it.

| Backend (`backend/.env`, or Render > Environment) | What it is |
| --- | --- |
| `MONGODB_URI`, `MONGODB_DB` | MongoDB connection string and database name |
| `ADMIN_USERNAME`, `ADMIN_PASSWORD_HASH` | The owner login (make the hash with `node backend/scripts/admin-password.mjs "password"`) |
| `AUTH_SECRET` | 32+ random characters; signs the dashboard login |
| `BACKEND_API_KEY` | 24+ random characters; the secret the website sends |
| `LEADS_RATE_LIMIT` | optional: forms one visitor may send per 10 minutes (default 10) |

| Website (`frontend/.env.local`, or Vercel > Environment Variables) | What it is |
| --- | --- |
| `BACKEND_URL` | Address of the backend, e.g. `https://openarms-backend.onrender.com` (locally `http://localhost:4000`) |
| `BACKEND_API_KEY` | Must be exactly the same value as the backend's |

The website holds no database settings and no login secrets.

## Working on your own computer

```bash
npm install                                          # once, from the project root
cp backend/.env.example backend/.env                 # fill in the backend settings
cp frontend/.env.example frontend/.env.local         # BACKEND_URL + the same BACKEND_API_KEY
npm run dev                                          # backend on :4000 and website on :3000, together
```

`npm run dev:backend` and `npm run dev:frontend` start just one of them. The website's forms and `/admin` need the
backend running.

| Command | What it does |
| --- | --- |
| `npm run dev` | Backend and website with live reload |
| `npm run build` | Production build of both |
| `npm run lint` | ESLint over `frontend/`, `backend/` and `shared/` |
| `npm run typecheck` | TypeScript check of both |

## Deploying

**Backend on Render.** Either create the service from the blueprint (New > Blueprint, pick this repository; it uses
`render.yaml`), or create a Web Service by hand with:

- Build command: `npm ci --workspace backend && npm run build --workspace backend`
- Start command: `npm run start --workspace backend`
- Health check path: `/health`
- Environment: the backend variables from the table above, plus `NODE_VERSION` = `22`

Render's free plan stops the service after about 15 minutes without a request, and the next visitor then waits up to a
minute while it wakes up (a form sent in that minute can fail). The Starter plan stays awake. If you stay on the free
plan, a monitor that requests `https://<your-service>.onrender.com/health` every 10 minutes keeps it awake.

**Website on Vercel.** The project's Root Directory is the repository root, and `vercel.json` pins the commands: install
from the workspace root (`npm install`), build with `npm run build -w frontend`, and take the output from
`frontend/.next` (the website imports `shared/`, which sits next to `frontend/`). Set `BACKEND_URL` to the Render
address and `BACKEND_API_KEY` to the same value the backend has. The database variables are no longer needed on Vercel.

Set the backend up first: until `BACKEND_URL` and `BACKEND_API_KEY` are set on Vercel and the Render service is running,
the website's forms and the dashboard cannot reach it.

To rotate the shared key, change `BACKEND_API_KEY` on both sides (the website and the backend); until both match,
forms and the dashboard answer with "could not be reached".

## The backend's API

All requests need the `x-api-key` header. `/admin/*` (except login) also need `Authorization: Bearer <login token>`.

| Request | Purpose |
| --- | --- |
| `GET /health` | Health check (no key needed) |
| `POST /leads` | A form submission (the website also sends `x-client-ip`, the visitor's address, for the rate limit) |
| `POST /admin/login` | Sign in; returns `{ token, expiresAt, admin }` |
| `GET /admin/me`, `/admin/stats`, `/admin/leads`, `/admin/leads/:id`, `/admin/users` | Dashboard data |
| `GET /admin/export` | The leads as a CSV file (accepts `type`, `status`, `q`) |
| `PATCH /admin/leads/:id` | Change a lead's `status` and/or `note` |
| `DELETE /admin/leads/:id` | Delete a lead |
| `POST /admin/users`, `DELETE /admin/users/:email` | Add or remove an admin |
