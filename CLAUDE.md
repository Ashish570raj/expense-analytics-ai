# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Spendly — a Flask-based expense tracking web application. This is a student project built incrementally through guided steps.

## Commands

```bash
# Run the application
python app.py

# Run tests
pytest
```

## Architecture

- **app.py** — Flask application with routes for landing, auth (login/register/logout), and expense CRUD (placeholders)
- **database/db.py** — Database layer (to be implemented): `get_db()`, `init_db()`, `seed_db()` using SQLite
- **templates/** — Jinja2 HTML templates (base.html extends for all pages)
- **static/** — CSS and client-side JavaScript

## Current State

The app renders static pages. Key routes return placeholder strings — students implement:
- Database setup (Step 1)
- User authentication (Steps 2-4)
- Expense CRUD operations (Steps 7-9)

Refer to `database/db.py` comments for required functions.
