# IdeaBridge — Customer Innovation Intelligence Platform

A working frontend prototype of IdeaBridge: a platform where customers suggest and validate product
ideas, and companies turn that validated demand into product decisions.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Demo flow

1. Open the landing page and click **Explore Ideas** (log in as a **Customer** first — any
   email/password works, it's a simulated auth flow).
2. Open **Lemon + Mint Sparkling Drink** from Explore.
3. Vote **Definitely** on "Would you actually buy this?" and watch the chart update.
4. Go to **Share an Idea** and submit a new idea — it appears instantly in **My Ideas**.
5. Log out, then log back in as a **Company** (pick FizzCo).
6. Open **Market Insights** and click **Generate AI Insight** to see the simulated clustering summary.
7. Open **Concept Lab**, adjust the "Lemon Mint Spark" concept, and click **Launch Consumer Test**.
8. Review the simulated results and the **AI Recommendation**.

## Stack

- React + Vite
- React Router
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- Recharts for analytics
- lucide-react for icons
- All state is local (`AppContext.jsx`) and persisted to `localStorage` — no backend required.

## Structure

```
src/
  components/   Reusable UI: cards, layouts, charts, nav, toast, modal
  context/       AppContext.jsx — auth, ideas, votes, notifications, toasts
  data/          mockData.js — demo companies, ideas, challenges, insights
  pages/
    customer/    Explore, idea detail, create idea, challenges, profile, notifications
    company/     Overview, idea management, challenges, insights, concept lab, analytics
```

Data lives separately from UI in `src/data/mockData.js` and `src/context/AppContext.jsx`, so a real
backend can be wired in later by replacing the context's state logic with API calls.
