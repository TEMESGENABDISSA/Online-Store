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

## Project Checklist

### Shopping Journey and Functionality
- [x] Home page with navigation and featured products
- [x] Product catalogue with filtering and sorting
- [x] Product detail pages with correct information
- [x] Add to cart functionality
- [x] Cart with quantity management (add, update, remove)
- [x] Subtotal calculation
- [x] Empty cart state with helpful message
- [x] Checkout form with validation
- [x] Order confirmation page
- [x] No payment processing (as per project scope)

### UI, Responsive Design, Accessibility
- [x] Consistent design across all pages
- [x] Responsive layout (mobile, tablet, desktop)
- [x] Mobile navigation menu
- [x] Semantic HTML elements
- [x] ARIA labels and roles
- [x] Form labels and error messages
- [x] Focus states for keyboard navigation
- [x] Alt text for product images

### Code Structure and Reuse
- [x] Shared product data in single source
- [x] Reusable ProductCard component
- [x] Cart context for state management
- [x] Clear component boundaries
- [x] Readable naming conventions
- [x] Sensible project structure

### Performance and Day 43 Concepts
- [x] next/image with proper dimensions and sizes
- [x] next/font for font optimization
- [x] Remote image configuration in next.config
- [x] Server Components for static content
- [x] Client Components only where needed
- [x] Core Web Vitals documented in PERF.md
- [x] Environment configuration with .env.example

### Configuration and Documentation
- [x] Clear README with setup instructions
- [x] .env.example with placeholder values
- [x] PERF.md with performance measurements
- [x] No secrets committed to Git
- [x] .gitignore properly configured

## Key Design Decisions

### Why product data in one shared file?
Single source of truth ensures consistency across all pages (home, catalogue, detail, cart). Changes to product information only need to be made in one place.

### Why use React Context for cart?
Context provides a clean way to manage cart state across the application without prop drilling. It allows cart functionality to be accessed from any component.

### Why Server Components where possible?
Server Components reduce the amount of client-side JavaScript shipped to the browser, improving performance. They're used for static content like product listings.

### Why NEXT_PUBLIC_ prefix for public variables?
NEXT_PUBLIC_ variables are inlined at build time and exposed to the browser. This is intentional for values that need to be client-accessible, while secrets remain server-only.

## How to Run

### Development
```bash
npm run dev
```
Open http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Performance Summary

See [PERF.md](./PERF.md) for detailed performance measurements and optimizations.

- **LCP**: Improved by ~57% (4.2s → 1.8s)
- **CLS**: Improved by ~87% (0.15 → 0.02)
- **INP**: Improved by ~53% (180ms → 85ms)
- **Page Weight**: Reduced by ~83% (2.8MB → 480KB)

## License

This project is for educational purposes as part of the IBT College CodeOps curriculum.
