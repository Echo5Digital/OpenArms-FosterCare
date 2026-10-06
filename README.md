# Open Arms Foster Care

The Open Arms website: a [Next.js](https://nextjs.org) app with a lead-capture backend (MongoDB) and an admin dashboard.

The project is split into two folders that are set up as npm workspaces:

```
frontend/   The Next.js app: pages, components, styling, images (public/), and the thin route files
            that give the backend its web addresses (/api/leads, /admin/export).
backend/    Server-side code: MongoDB connection, lead validation and storage, admin login and sessions,
            admin users, the CSV export and the form-submission handler.
```

The frontend imports backend code with the `@backend/*` alias (for example `@backend/leads/store`), which points at
`backend/src/*`. Next.js compiles the backend together with the frontend, so there is still one app and one deploy.

## Getting started

```bash
npm install                                    # once, from the project root
cp frontend/.env.example frontend/.env.local   # then fill in the values
npm run dev                                    # http://localhost:3000
```

Run these from the project root:

| Command             | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Start the dev server                                  |
| `npm run build`     | Production build                                      |
| `npm run start`     | Serve the production build                            |
| `npm run lint`      | ESLint over `frontend/` and `backend/`                |
| `npm run typecheck` | TypeScript check of both folders                      |

## Admin password

The dashboard at `/admin` checks a salted hash, not the password itself. To make one:

```bash
node backend/scripts/admin-password.mjs "your new password"
```

Paste the printed `ADMIN_PASSWORD_HASH=...` line into `frontend/.env.local` (or the hosting provider's environment
variables).

## Deploying

Deploy the `frontend/` folder as the app's root directory. On Vercel, set **Root Directory** to `frontend` and leave
**Include source files outside of the Root Directory** switched on, so `backend/` is available during the build.
Environment variables are the ones listed in `frontend/.env.example`.
