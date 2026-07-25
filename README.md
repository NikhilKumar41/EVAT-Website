# EVAT Monorepo

This repository has been restructured from individual repos into a monorepo, combining `EVAT-App-BE` and `EVAT-Website` (with more repos to follow) while preserving full commit history from each original repo.

## Structure

- `EVAT-App-BE/` — backend (Node.js/Express/TypeScript, MongoDB)
- `EVAT-Website/` — frontend (React + Vite)

## How this was migrated

Each original repo's history was rewritten using `git filter-repo` so all commits appear to have always lived inside their subfolder, then merged into this repo using `git merge --allow-unrelated-histories`. This means:
- Every commit, author, and PR from the original repos is preserved
- `git log --follow` and `git blame` work correctly inside each subfolder

## Running the project

Each app currently has its own `package.json` and `.env` (not committed — see `.env.example` if available, or ask a maintainer for required values).

**Backend:**
```bash
cd EVAT-App-BE
npm install
npm run server
```

**Frontend:**
```bash
cd EVAT-Website
npm install
npm run dev
```

## Known issues / follow-ups

- Some legacy/unused files remain from the original repos (e.g. React Native leftovers, duplicate config) pending team confirmation before removal
- `NavBar.jsx` / `Navbar.jsx` case-duplicate file issue in `EVAT-Website/src/components/` needs resolving
  
---
