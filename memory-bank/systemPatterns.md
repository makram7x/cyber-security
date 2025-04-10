# System Patterns

## Component Patterns

### Layout Components
1. **RTLLayout**
   - Base layout wrapper for RTL support
   - Handles direction context
   - Manages layout flow

2. **PageContainer**
   - Consistent page margins
   - Responsive width control
   - Section spacing

3. **Grid System**
   - RTL-aware grid layout
   - Responsive breakpoints
   - Column ordering for RTL

### UI Components
1. **ContentCard**
   - Article/news preview
   - Image handling
   - Metadata display
   - Category indicators

2. **MediaGallery**
   - Grid/list view toggle
   - Lazy loading
   - Lightbox integration
   - RTL navigation

3. **Navigation**
   - RTL-aware dropdown
   - Mobile hamburger menu
   - Breadcrumbs
   - Category menu

## Design Patterns

### Typography
```javascript
const typography = {
  fonts: {
    heading: 'Tajawal, Dubai, sans-serif',
    body: 'Cairo, sans-serif',
    latin: 'Open Sans, Roboto, sans-serif'
  },
  sizes: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.75rem',
    body: '1.125rem'
  }
}
```

### Color System
```javascript
const colors = {
  primary: {
    navy: '#1A3A5F',
    white: '#FFFFFF',
    gold: '#D4AF37'
  },
  secondary: {
    lightGrey: '#F5F5F5',
    mediumGrey: '#E0E0E0',
    charcoal: '#333333'
  },
  accent: {
    teal: '#008080',
    burgundy: '#800020'
  }
}
```

## Interaction Patterns

### Form Handling
1. **RTLFormField**
   - Right-aligned labels
   - RTL input handling
   - Validation messages
   - Error states

2. **SearchInput**
   - RTL text handling
   - Advanced search toggle
   - Results dropdown

### Navigation Patterns
1. **RTLBreadcrumbs**
   - RTL separator handling
   - Dynamic path generation
   - Active state

2. **CategoryNav**
   - Hierarchical menu
   - RTL dropdown
   - Mobile adaptation

## Data Patterns

### Content Structure
```javascript
const articleStructure = {
  title: string,
  subtitle: string,
  content: string,
  author: {
    name: string,
    avatar: string
  },
  metadata: {
    publishDate: Date,
    category: string,
    tags: string[]
  },
  media: {
    featured: string,
    gallery: string[]
  }
}
```

### API Response Patterns
```javascript
const responseStructure = {
  data: T,
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      total: number
    },
    timestamp: Date
  },
  error?: {
    code: string,
    message: string
  }
}
```

## State Management Patterns

### Content Loading
1. **useContentLoader**
   - Loading states
   - Error handling
   - Data caching
   - Pagination

2. **useMediaLoader**
   - Lazy loading
   - Format handling
   - Error states
   - Progress tracking

## Testing Patterns

### Component Testing
1. **RTL Component Tests**
   - Direction context
   - Text alignment
   - Layout flow
   - Interaction handling

2. **Media Component Tests**
   - Loading states
   - Error handling
   - User interactions
   - Responsive behavior