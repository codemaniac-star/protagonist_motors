# ✺ Protagonist Motors

> **A Collector’s Garage Logbook & Curated Archive**  
> *Six analog icons. Zero guesswork. Every chassis has a story, and every number has a source.*

[![Live Site](https://img.shields.io/badge/Live_Site-protagonistmotors.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://protagonistmotors.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.29-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ElevenLabs](https://img.shields.io/badge/ElevenLabs-Conversational_AI-FF5A00?style=for-the-badge&logo=elevenlabs&logoColor=white)](https://elevenlabs.io/)

---

## 🌐 Live Application

Explore the live showroom and interact with the digital archive:  
🔗 **[https://protagonistmotors.vercel.app/](https://protagonistmotors.vercel.app/)**

---

## 📖 Overview

**Protagonist Motors** is a bespoke digital archive and collector’s logbook celebrating pure analog driving machines. Presented as a vintage editorial folio—complete with binder holes, letterpress typography, hand-annotated sketches, mechanical blueprints, and service ledgers—the platform treats each vehicle as an authenticated historical artifact.

From rare homologation specials to poster supercars, each vehicle is presented with unfiltered engineering telemetry, cylinder compression readings, provenance timelines, and side-by-side comparison race tracks. Visitors can even converse in real-time with **J. Sterling**, Chief Curator & Archivist, powered by ElevenLabs voice AI.

---

## ✨ Key Features

### 🏛️ 1. Curated Showroom Collage (`/`)
* **Folio Registry**: Browse the six authenticated machines across **JDM Legends** and **European Exotics**.
* **Dynamic Filtering & Sorting**: Filter by heritage category or sort on demand by catalog order, price (USD/KES), or 0–100 km/h acceleration.
* **Scrapbook Aesthetic**: Textured paper styling, binder ring margins, editorial stamps, tape accents, and hand-drawn annotations.

### 📜 2. Exhaustive Chassis Dossiers (`/dossier/[slug]`)
* **Powertrain & Dyno Ledgers**: Granular mechanical specifications detailing engine codes, peak torque, curb weight, transmission codes, and top speed.
* **Cylinder Integrity Calibration**: Visual bar-by-bar cylinder compression diagnostic readouts verifying engine health.
* **Annotated Mechanical Architecture**: Archival chassis blueprint diagrams detailing suspension, weight distribution, and drivetrain layout.
* **Provenance Chain & Service Ledger**: Interactive chronological ownership and verification timeline from factory delivery to intake.
* **Printable Folio Sheets**: One-click printable folios formatted for collector records and physical inspections.

### 🏁 3. Head-to-Head Compare Arena (`/compare`)
* **"The Scribble Race" Telemetry Duel**: Select any two machines to pit them against each other across four dynamic benchmark tracks:
  1. *Acceleration (0–100 km/h)* — lower sprint time takes the checkered flag.
  2. *Terminal Top Speed Run (km/h)*.
  3. *Power-to-Weight Index (hp / tonne)*.
  4. *Fuel Consumption & Efficiency (L/100km)*.
* **Pros & Cons Ledger**: Curated breakdowns of verified mechanical strengths versus raw physical compromises (heavy clutches, unassisted steering, or boost lag).

### 📋 4. Acquisition & Inspection Desk (`/acquire`)
* **Private Inspection Booking**: Schedule appointments at the **Nairobi Branch (Shed 7, Industrial Way)**, the **Solihull Vaults (UK)**, or arrange **Enclosed Doorstep Delivery**.
* **Vehicle Reservation Dockets**: Real-time acquisition ledger displaying dual-currency valuations (USD & KES), documentation fees, and transit costs.
* **Pass & Docket Generation**: Form generation producing official printable receipt passes.

### 🎙️ 5. AI Curator Concierge (`CuratorConcierge`)
* **Voice-Enabled Archivist**: Speak directly with **J. Sterling**, Lead Automotive Archivist and Chief Curator.
* **ElevenLabs React Integration**: Powered by `@elevenlabs/react` using WebRTC low-latency streaming audio for real-time natural dialogue.

---

## 🏎️ The Authenticated Garage Index

| Folio | Chassis | Origin | Powertrain | Output | Top Speed | 0–100 km/h |
| :---: | :--- | :---: | :--- | :--- | :---: | :---: |
| **01** | **1993 Porsche 911 Carrera RS 3.8** | 🇩🇪 Germany | 3.8L NA Air-Cooled Flat-Six (M64/04) | 300 PS · 360 Nm | 271 km/h | 4.9 s |
| **02** | **1994 Toyota Supra RZ Twin-Turbo** | 🇯🇵 Japan | 3.0L Sequential Twin-Turbo I6 (2JZ-GTE) | 320 hp · 427 Nm | 250 km/h | 4.9 s |
| **03** | **1988 Lamborghini Countach 5000 QV** | 🇮🇹 Italy | 5.2L 48V V12 · 6 Weber Carburetors | 455 PS · 500 Nm | 295 km/h | 4.8 s |
| **04** | **1993 Nissan Skyline GT-R V-Spec** | 🇯🇵 Japan | 2.6L Twin-Turbo I6 (RB26DETT) · ATTESA AWD | 280 PS · 353 Nm | 251 km/h | 5.1 s |
| **05** | **1990 Ferrari F40 (Non-Cat)** | 🇮🇹 Italy | 2.9L Twin-Turbo 90° V8 (Tipo F120A) | 478 PS · 577 Nm | 324 km/h | 4.1 s |
| **06** | **1994 Mazda MX-5 Miata NA 1.8** | 🇯🇵 Japan | 1.8L NA DOHC Inline-Four (BP-ZE) | 129 hp · 149 Nm | 197 km/h | 8.2 s |

---

## 🛠️ Tech Stack & Architecture

* **Framework**: [Next.js 15.5](https://nextjs.org/) (App Router, Turbopack, React Server Components)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript 5.8](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) & bespoke CSS editorial design system
* **Voice AI**: [@elevenlabs/react 1.23](https://github.com/elevenlabs/elevenlabs-js) (Conversational AI Agent)
* **Typography**: `@fontsource/playfair-display`, `@fontsource/space-mono`, and `@fontsource/caveat`
* **Hosting**: [Vercel](https://vercel.com/)

---

## 📁 Repository Structure

```text
├── public/
│   ├── images/
│   │   ├── cars/                 # High-resolution vehicle photography
│   │   ├── architecture/         # Technical blueprint monographs
│   │   └── curator.svg           # Illustrated portrait of J. Sterling
├── src/
│   ├── app/
│   │   ├── acquire/page.tsx      # Private inspection & reservation desk
│   │   ├── compare/page.tsx      # Head-to-head comparison arena
│   │   ├── dossier/[slug]/       # Dynamic vehicle dossier & calibration folio
│   │   ├── globals.css           # Custom logbook design system & keyframes
│   │   ├── layout.tsx            # Root layout with font imports & Shell
│   │   └── page.tsx              # Main hero & scrapbook showroom
│   ├── components/
│   │   ├── acquire-desk.tsx      # Reservation & inspection scheduling form
│   │   ├── car-card.tsx          # Showroom card with tape and stamp motifs
│   │   ├── compare-arena.tsx     # Scribble race telemetry bars & comparison logic
│   │   ├── curator-concierge.tsx # ElevenLabs voice AI chat overlay
│   │   ├── mechanical-architecture.tsx # Blueprint plate & spec monograph
│   │   ├── print-button.tsx      # Client-side print folio trigger
│   │   ├── scrapbook-sketch.tsx  # SVG doodles (underlines, scribbles, stamps)
│   │   ├── shell.tsx             # Binder rings, header navigation, colophon footer
│   │   └── showroom.tsx          # Filterable, sortable vehicle grid
│   └── data/
│       └── cars.ts               # Authenticated vehicle specifications & records
├── .env.example                  # Environment variable blueprint
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: v18.18+ or v20+ recommended
* **npm** or **pnpm** / **yarn**

### 1. Clone & Install

```bash
git clone https://github.com/codemaniac-star/protagonist_motors.git
cd protagonist_motors
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Populate the required credentials:

```env
# ElevenLabs Conversational AI Agent ID for J. Sterling Concierge
NEXT_PUBLIC_ELEVENLABS_AGENT_ID=your_elevenlabs_agent_id_here

# (Optional) ElevenLabs API Key if your agent requires authentication
ELEVENLABS_API_KEY=your_optional_api_key_here
```

> **Note:** If `NEXT_PUBLIC_ELEVENLABS_AGENT_ID` is omitted, the voice concierge widget gracefully notifies the user to provide their Agent ID while allowing all other showroom features to function seamlessly.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the showroom.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Design System & Colophon

The aesthetic of Protagonist Motors bridges mid-century mechanical documentation, automotive press materials, and hand-annotated field journals:

* **Editorial Serif (`Playfair Display`)**: Used for titles, hero headers, and formal quotes.
* **Technical Monospace (`Space Mono`)**: Used for dyno calibration charts, telemetry readouts, part numbers, and compression tables.
* **Handwritten Cursive (`Caveat`)**: Used for curator notes, marginalia, and scrapbook annotations.
* **Analog Details**: Three-hole binder punch margin, translucent drafting tape overlays, rubber approval stamps, and blueprint inverted colorways.

---

## 🏛️ Physical Showroom & Colophon Notice

* **Physical Showroom**: Shed 7, Industrial Way, Nairobi Branch *(Inspections by appointment only)*
* **Archival Vaults**: Solihull, United Kingdom
* **Plate Impression**: No. 89-042 · © 1989–2026 Protagonist Motors Ltd.

---

## 🔗 Live Link

Experience the digital logbook live:  
👉 **[https://protagonistmotors.vercel.app/](https://protagonistmotors.vercel.app/)**
