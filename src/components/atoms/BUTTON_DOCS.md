# Button Component Documentation

## Overview

A flexible, type-safe button component built with TypeScript, Tailwind CSS, and class-variance-authority for variant management.

## Features

- ✅ Three variants: `primary`, `secondary`, `ghost`
- ✅ Three sizes: `sm`, `md`, `lg`
- ✅ Full TypeScript support with proper types
- ✅ Supports all native button HTML attributes
- ✅ Custom className support with proper Tailwind merge
- ✅ Focus states with ring indicators
- ✅ Hover and active states
- ✅ Disabled state handling
- ✅ Smooth transitions

## Usage

### Basic Usage

```tsx
import { Button } from "@/src/components/atoms/Button";

// Primary button (default)
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Click me</Button>

// Ghost button
<Button variant="ghost">Click me</Button>
```

### With Sizes

```tsx
// Small button
<Button size="sm">Small</Button>

// Medium button (default)
<Button size="md">Medium</Button>

// Large button
<Button size="lg">Large</Button>
```

### Form Submission

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Submit request
  </Button>
</form>
```

### Custom Styling

```tsx
// Add custom classes (will be properly merged with Tailwind)
<Button variant="primary" className="w-[178px] h-[41px]">
  Custom Size
</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled Button</Button>
```

### With Click Handler

```tsx
<Button variant="secondary" onClick={() => console.log("Clicked!")}>
  Click me
</Button>
```

## Props

| Prop        | Type                                  | Default     | Description                   |
| ----------- | ------------------------------------- | ----------- | ----------------------------- |
| `variant`   | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Visual style variant          |
| `size`      | `"sm" \| "md" \| "lg"`                | `"md"`      | Button size                   |
| `className` | `string`                              | -           | Additional CSS classes        |
| `disabled`  | `boolean`                             | `false`     | Disable the button            |
| `type`      | `"button" \| "submit" \| "reset"`     | `"button"`  | Button type attribute         |
| `onClick`   | `(event: React.MouseEvent) => void`   | -           | Click event handler           |
| ...rest     | `ButtonHTMLAttributes`                | -           | All other native button props |

## Variants

### Primary

- **Use case**: Main call-to-action buttons
- **Style**: Blue background with white text
- **States**: Hover darkens, active state even darker
- **Example**: "Submit", "Get Started", "Request Proposal"

### Secondary

- **Use case**: Secondary actions, alternative options
- **Style**: White background with border and dark text
- **States**: Hover adds light gray background
- **Example**: "Cancel", "Learn More", "View Details"

### Ghost

- **Use case**: Tertiary actions, subtle interactions
- **Style**: Transparent background with text only
- **States**: Hover adds subtle background
- **Example**: "Skip", "Maybe Later", "Dismiss"

## Sizes

### Small (`sm`)

- Padding: `px-3 py-1.5`
- Text: `text-sm`
- Use case: Compact UIs, inline actions

### Medium (`md`) - Default

- Padding: `px-4 py-2`
- Text: `text-sm`
- Use case: Standard buttons throughout the app

### Large (`lg`)

- Padding: `px-6 py-3`
- Text: `text-base`
- Use case: Hero sections, prominent CTAs

## Accessibility

- ✅ Keyboard accessible (focus states)
- ✅ Screen reader friendly
- ✅ Proper disabled state handling
- ✅ Focus ring indicators
- ✅ Semantic HTML button element

## Examples from Codebase

### Hero Section

```tsx
<Button variant="primary">Your Work</Button>
<Button variant="secondary">Get a proposal</Button>
```

### Career Section

```tsx
<Button variant="primary">View open roles</Button>
<Button variant="secondary">Graduate programs</Button>
<Button variant="ghost">Life at Emtec</Button>
```

### Navbar

```tsx
<Button variant="primary" className="w-[178px] h-[41px]">
  Request a proposal
</Button>
```

### Request Proposal Form

```tsx
<Button type="submit" variant="primary">
  Submit request
</Button>
```

## Dependencies

- `class-variance-authority` - Type-safe variant management
- `clsx` - Conditional class names
- `tailwind-merge` - Merge Tailwind classes without conflicts

## Design Tokens

The button uses the following design tokens from your Tailwind config:

- **Colors**: `blue-600`, `blue-700`, `blue-800`, `slate-*`
- **Spacing**: Tailwind spacing scale
- **Border Radius**: `rounded-lg`
- **Shadows**: `shadow-sm`, `shadow-md`
- **Transitions**: `duration-200`

## Notes

- The component uses `React.forwardRef` to support ref forwarding
- All Tailwind classes are properly merged to avoid conflicts
- The component is fully typed with TypeScript
- Supports all native button HTML attributes through spread props
