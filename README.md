# Ethiopian Coffee Store

A responsive online store for premium Ethiopian coffee products. Built with Next.js, TypeScript, and Tailwind CSS.

## Project Purpose

This store helps coffee enthusiasts discover and purchase premium Ethiopian coffee beans and related products. Customers can browse products, view details, add items to cart, and submit orders.

## Features

- Product catalogue with filtering and sorting
- Product detail pages with full descriptions
- Shopping cart with quantity management
- Order form with validation
- Responsive design (mobile, tablet, desktop)
- Optimized images and fonts (next/image, next/font)
- Environment configuration for safe deployment

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    page.tsx              # Home page
    products/
      page.tsx            # Product catalogue
      [id]/
        page.tsx          # Product detail
    cart/
      page.tsx            # Shopping cart
    checkout/
      page.tsx            # Order form
    order-success/
      page.tsx            # Order confirmation
  components/             # Reusable components
  data/
    products.ts           # Product data
  lib/                    # Shared utilities
```

## Environment Variables

See `.env.example` for required environment variables. Copy it to `.env.local` and fill in your values.

## Performance

See `PERF.md` for performance measurements and optimizations applied.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- next/image for image optimization
- next/font for font optimization
