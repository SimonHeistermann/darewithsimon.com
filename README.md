# DareWithSimon

> Personal brand & portfolio website — an independent training/portfolio project built with React, TypeScript, Tailwind CSS and Express.js backend.

## Disclaimer

This is an **independent training/portfolio project**. It is not a commercial product and is not intended for real-world use.

- No real transactions, services, or orders are processed
- The contact form and newsletter features are for educational demonstration only
- Any resemblance to a real commercial business is for demonstration purposes only

**Live demo:** [old-portfolio.projects.simon-heistermann.de](https://old-portfolio.projects.simon-heistermann.de/)

## About

DareWithSimon is a personal brand website showcasing four facets of my profile: Developer, Student, Traveler, and Content Creator. It features a bilingual interface (English/German), a contact form with backend email delivery, and a newsletter signup powered by Brevo. The project demonstrates full-stack web development skills including responsive design, API integration, and i18n.

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui (Radix UI)
- Framer Motion for animations
- Vite as build tool
- wouter for client-side routing

**Backend:**
- Express.js with TypeScript
- Nodemailer for SMTP email delivery
- Brevo API for newsletter management
- Rate limiting and CORS

## Features

- Bilingual interface (EN/DE) with language switcher and localStorage persistence
- Responsive single-page design with smooth scroll navigation
- Contact form with validation, consent tracking, and honeypot spam protection
- Newsletter signup with double opt-in via Brevo
- Social media integration (LinkedIn, Instagram)
- Legal pages: Impressum, Privacy Policy, Terms & Conditions (GDPR-compliant)
- Tech stack showcase with animated scrolling ticker

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/SimonHeistworwormann/darewithsimon.git
cd darewithsimon
npm install
```

### Running

```bash
# Start development server (frontend + backend)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

The dev server runs on `http://localhost:5001` by default.

### Backend

The backend requires a separate `.env` file in `/backend/` with SMTP credentials and Brevo API keys. See `backend/src/index.ts` for required environment variables.

## Legal

- [Legal Notice / Impressum](https://old-portfolio.projects.simon-heistermann.de/legal/impressum)
- [Privacy Policy / Datenschutzerklaerung](https://old-portfolio.projects.simon-heistermann.de/legal/datenschutz)
- [Terms & Conditions / AGB](https://old-portfolio.projects.simon-heistermann.de/legal/agb)

## Author

**Simon Maximilian Heistermann**
- Website: [simon-heistermann.de](https://simon-heistermann.de)
- Email: simon@heistermann-solutions.de
- LinkedIn: [Simon Heistermann](https://www.linkedin.com/in/simon-maximilian-heistermann-419531250/)

## License

This is an independent training project and is not licensed for commercial use.
