# AI Coding Instructions for May Gourmet

## Project Overview
May Gourmet is an online restaurant reservation platform built with **Node.js + Express + EJS**. The application enables users to discover, reserve, and review restaurants with an intuitive interface.

**Main Entry Point:** [serveur.js](serveur.js) → [app.js](app.js)

## Architecture

### Core Stack
- **Server:** Express.js running on port 3004
- **View Engine:** EJS templates for server-side rendering
- **Static Assets:** Express static middleware serving `public/` directory
- **Language:** CommonJS modules (not ES6)

### Directory Structure
```
maygourmet/
├── serveur.js          # HTTP server initialization (main entry point)
├── app.js              # Express app setup & route definitions
├── views/              # EJS templates (accueil, equipe, plats, contact, navbar)
├── public/css/         # Static stylesheets
├── public/css/sql/     # SQL queries (structural note: should move to root-level db/ or sql/)
└── package.json        # Dependencies: express, ejs
```

## Key Patterns

### Route Definition Pattern
Routes in [app.js](app.js) follow a consistent structure:
- **Naming:** `/api/{page_name}` (e.g., `/api/accueil`, `/api/plats`)
- **Root Route:** `/` returns inline HTML (unlike other routes that use `res.render()`)
- **Port:** Always 3004 (defined in [serveur.js](serveur.js))
- **Logging:** Console.log statements log route access for debugging

Example:
```javascript
app.get('/api/plats', (req, res) => {
    console.log("Je passe dans la partie /api/plats");
    res.render('plats');  // Renders views/plats.ejs
});
```

### View Composition
- EJS templates include [navbar.ejs](views/navbar.ejs) as a reusable component
- Each page (accueil, equipe, plats, contact) is a separate template file
- Templates use server-side rendering—no data is currently passed to views

## Development Workflow

### Start Development Server
```bash
npm start  # Actually runs 'node serveur.js' (run script exists but npm start typically requires a "start" script)
# Direct approach:
node serveur.js
```

### Access Application
- Root: `http://localhost:3004/`
- Pages: `http://localhost:3004/api/{page_name}`
  - `/api/accueil` – Home page
  - `/api/equipe` – Team page
  - `/api/plats` – Dishes page
  - `/api/contact` – Contact page

### Testing
Currently **no automated tests** (package.json shows placeholder test script). When adding tests, use Jest or Mocha with Express testing libraries.

## Important Developer Notes

1. **French Comments:** Code contains French comments—maintain this convention when modifying existing functions.

2. **Module System:** Uses CommonJS (`require`/`module.exports`), NOT ES6 imports. Keep consistency when adding modules.

3. **Commented Code:** [app.js](app.js) has commented-out legacy response handling (using `res.write()` + `res.writeHead()`). When modifying routes, prefer the current `res.render()` pattern.

4. **SQL Location Issue:** `public/css/sql/requetes.sql` is stored in an unconventional location. Should be moved to `./sql/` or `./db/` at project root for clarity.

5. **Static File Serving:** Express serves `./public/` directory without path prefix. CSS files accessed as `/css/style.css` in templates, not `/public/css/style.css`.

## Common Tasks

### Adding a New Page
1. Create new route in [app.js](app.js) following `/api/{name}` pattern
2. Create corresponding EJS template in `views/{name}.ejs`
3. Include navbar via EJS include: `<%- include('navbar') %>`

### Adding Dependencies
```bash
npm install <package>
```
Update [package.json](package.json) accordingly. Current dependencies: `express` (^5.2.1), `ejs` (^4.0.1).

### Debugging
- Routes log to console—check terminal output for requests
- Use Node.js debugger or add strategic `console.log()` statements
- Views render silently unless syntax errors occur

## Code Style Observations
- Inconsistent spacing in comments (e.g., "eb réponse" typo in commented code)
- French language used throughout for clarity/readability preference
- Function names describe route logic (no abbreviations or cryptic names)
