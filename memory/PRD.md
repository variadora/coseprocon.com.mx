# PRD — FRAGUA · Landing Page

## Original Problem Statement
COMERCIALIZADORA DE SERVICIOS Y PRODUCTOS PARA LA CONSTRUCCIÓN, S.A. de C.V. — landing page for wholesale trade of construction materials (except wood). Language: Spanish.

## User Choices
- Sections: Inicio, Servicios, Contacto (+ Materiales showcase added).
- Functional contact/quote form that saves messages.
- Example company data; design decided by builder.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + Lenis (smooth scroll) + react-fast-marquee. Brutalist/industrial "concrete" theme, Clash Display + IBM Plex.
- Backend: FastAPI + MongoDB (motor). Endpoints under /api.
- Brand: FRAGUA. Original SVG logo used as favicon.

## Implemented (2026-06)
- Kinetic hero with masked line-by-line reveal + parallax rebar image.
- Editorial marquee, Servicios bento (6), Materiales grid (4 products w/ photography), Stats parallax band, functional Contacto form, Footer with giant outline wordmark.
- Backend: POST /api/contacts (saves quote requests), GET /api/contacts. Contact model.
- Tested end-to-end: backend 100%, frontend 100%.

## Backlog
- P1: Admin view to list submitted quote requests.
- P2: Email notification on new quote (Resend).
- P2: Product detail pages / downloadable spec sheets.
