# Architecture Overview

This document describes the architecture and design decisions for the Resume/CV website.

## 📐 Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main resume page (client component)
│   └── globals.css          # Global styles with Tailwind v4
│
├── components/              # React components
│   ├── ui/                  # shadcn/ui base components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── separator.tsx
│   │   └── timeline.tsx
│   └── resume/              # Resume-specific components
│       ├── info-item.tsx    # Reusable info display component
│       ├── section-header.tsx # Section header with icon
│       └── index.ts         # Barrel export
│
├── data/                    # Data layer
│   └── resume.ts           # All resume data (experiences, portfolio, etc.)
│
├── types/                   # TypeScript definitions
│   └── index.ts            # All type definitions
│
├── constants/               # Application constants
│   └── index.ts            # Config values, social links, etc.
│
├── lib/                     # Utility functions
│   └── utils/
│       ├── cn.ts           # Class name utility (clsx + tailwind-merge)
│       ├── date.ts         # Date formatting utilities
│       └── index.ts        # Barrel export
│
└── public/                  # Static assets
    └── foto-profile.jpg    # Profile image
```

## 🏗️ Architecture Principles

### 1. **Separation of Concerns**
- **Data**: All resume data is separated into `data/resume.ts`
- **Types**: Type definitions are centralized in `types/index.ts`
- **Components**: UI components are separated from business logic
- **Utilities**: Reusable functions are in `lib/utils/`

### 2. **Type Safety**
- Full TypeScript implementation
- All data structures are typed
- Component props are strictly typed
- No `any` types used

### 3. **Component Reusability**
- Reusable components in `components/resume/`
- Base UI components from shadcn/ui
- Consistent component patterns

### 4. **Maintainability**
- Clear folder structure
- Barrel exports for clean imports
- Constants extracted to separate files
- Single source of truth for data

### 5. **Developer Experience**
- TypeScript for autocomplete and type checking
- ESLint for code quality
- Prettier for code formatting
- Clear naming conventions
- Comprehensive README

## 🔄 Data Flow

```
data/resume.ts (Source of Truth)
    ↓
types/index.ts (Type Definitions)
    ↓
app/page.tsx (Presentation Layer)
    ↓
components/resume/ (Reusable Components)
    ↓
components/ui/ (Base UI Components)
```

## 📦 Key Design Decisions

### Why This Structure?

1. **Scalability**: Easy to add new sections or features
2. **Maintainability**: Clear separation makes updates easy
3. **Testability**: Components and utilities can be tested independently
4. **Reusability**: Components can be reused across the application
5. **Type Safety**: TypeScript catches errors at compile time

### Component Organization

- **UI Components** (`components/ui/`): Base design system components
- **Resume Components** (`components/resume/`): Domain-specific components
- **Page Components** (`app/`): Page-level composition

### Data Management

- All resume data is in a single file for easy updates
- Data is typed for safety
- Constants are extracted for configuration

## 🛠️ Development Workflow

1. **Update Data**: Edit `data/resume.ts`
2. **Add Types**: Update `types/index.ts` if needed
3. **Create Components**: Add to `components/resume/` or `components/ui/`
4. **Use in Pages**: Import and use in `app/page.tsx`

## 📝 Code Style

- **TypeScript**: Strict mode enabled
- **Naming**: PascalCase for components, camelCase for functions
- **Imports**: Absolute imports using `@/` alias
- **Formatting**: Prettier with consistent config
- **Linting**: ESLint with Next.js config

## 🚀 Future Improvements

Potential enhancements:
- [ ] Add unit tests with Vitest
- [ ] Add E2E tests with Playwright
- [ ] Add Storybook for component documentation
- [ ] Add i18n support for multiple languages
- [ ] Add dark mode toggle
- [ ] Add PDF generation API route
- [ ] Add analytics
- [ ] Add SEO improvements

