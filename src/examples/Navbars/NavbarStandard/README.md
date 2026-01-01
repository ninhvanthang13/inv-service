# NavbarStandard Component

A fixed-position navbar that always stays at the top of the screen with limited height and no margins.

## 📋 Overview

`NavbarStandard` is a streamlined navigation bar component designed to stay fixed at the top of your application. Unlike `DefaultNavbar`, it has:

- **Fixed position** at the top (no margins)
- **Limited height** (64px)
- **Full width** (100vw)
- **Theme integration** with dark mode support
- **Responsive** mobile menu

## 🎯 Features

- ✅ **Fixed Top Position**: Always visible at top of screen
- ✅ **Limited Height**: Exactly 64px tall
- ✅ **No Margins**: Edge-to-edge design
- ✅ **Dark Mode Support**: Adapts to theme
- ✅ **Responsive**: Mobile-friendly with hamburger menu
- ✅ **Route Integration**: Automatically displays routes
- ✅ **Action Button**: Optional CTA button

## 📦 Installation

Already included in Soft UI Dashboard React template.

```javascript
import NavbarStandard from "examples/Navbars/NavbarStandard";
```

## 🚀 Basic Usage

### Simple Usage

```jsx
import NavbarStandard from "examples/Navbars/NavbarStandard";

function App() {
  return (
    <>
      <NavbarStandard />
      <YourContent />
    </>
  );
}
```

### With Brand Name

```jsx
<NavbarStandard brandName="My Application" />
```

### With Routes

```jsx
import routes from "routes";

<NavbarStandard brandName="My App" routes={routes} />;
```

### With Action Button

```jsx
<NavbarStandard
  brandName="My App"
  routes={routes}
  action={{
    type: "internal",
    route: "/sign-up",
    color: "info",
    label: "Get Started",
  }}
/>
```

## 🎨 Props

| Prop        | Type                | Default               | Description            |
| ----------- | ------------------- | --------------------- | ---------------------- |
| `brandName` | `string`            | `"Soft UI Dashboard"` | Brand/logo text        |
| `routes`    | `array`             | `[]`                  | Array of route objects |
| `action`    | `object` \| `false` | `false`               | Action button config   |

### Action Object Structure

```typescript
{
  type: "internal" | "external",  // Link type
  route: string,                   // URL or path
  color: string,                   // Button color
  label: string,                   // Button text
}
```

## 💡 Examples

### Example 1: Basic Navbar

```jsx
<NavbarStandard brandName="Dashboard" />
```

### Example 2: With Routes

```jsx
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <PersonIcon />,
  },
];

<NavbarStandard brandName="My App" routes={routes} />;
```

### Example 3: With Action Button (Internal Link)

```jsx
<NavbarStandard
  brandName="My App"
  routes={routes}
  action={{
    type: "internal",
    route: "/sign-up",
    color: "info",
    label: "Sign Up",
  }}
/>
```

### Example 4: With Action Button (External Link)

```jsx
<NavbarStandard
  brandName="My App"
  routes={routes}
  action={{
    type: "external",
    route: "https://example.com",
    color: "success",
    label: "Visit Website",
  }}
/>
```

### Example 5: In App.js

```jsx
// App.js
import NavbarStandard from "examples/Navbars/NavbarStandard";
import routes from "routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Fixed Navbar */}
      <NavbarStandard brandName="Soft UI Dashboard" routes={routes} />

      {/* Content with top padding */}
      <Box sx={{ paddingTop: "64px" }}>
        <Routes>{getRoutes(routes)}</Routes>
      </Box>
    </ThemeProvider>
  );
}
```

## 📐 Dimensions

```
┌─────────────────────────────────────────┐
│  NavbarStandard                         │
│  ├─ Position: fixed                     │
│  ├─ Top: 0                              │
│  ├─ Left: 0                             │
│  ├─ Right: 0                            │
│  ├─ Height: 64px (fixed)                │
│  ├─ Margin: 0                           │
│  └─ Padding: 0 24px                     │
└─────────────────────────────────────────┘
```

## 🎨 Styling

### Default Styles

```javascript
{
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  margin: 0,
  padding: 0,
  height: "64px",
  minHeight: "64px",
  maxHeight: "64px",
  zIndex: 1100,
}
```

### Light Mode

```javascript
{
  backgroundColor: rgba(white, 0.95),
  backdropFilter: "saturate(200%) blur(30px)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
}
```

### Dark Mode

```javascript
{
  backgroundColor: palette.dark.main,
  backdropFilter: "saturate(200%) blur(30px)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
}
```

## 📱 Responsive Behavior

### Desktop (>= lg: 992px)

- Shows all navigation links
- Shows action button
- Hides mobile menu icon

### Mobile (< lg: 992px)

- Hides navigation links
- Hides action button
- Shows hamburger menu icon
- Opens mobile drawer menu

## 🔧 Content Padding

Since the navbar is fixed at the top, you need to add padding to your content:

```jsx
// Option 1: Add padding to content
<Box sx={{ paddingTop: "64px" }}>
  <YourContent />
</Box>

// Option 2: Add margin to content
<Box sx={{ marginTop: "64px" }}>
  <YourContent />
</Box>

// Option 3: Use CSS
.main-content {
  padding-top: 64px;
}
```

## 🎯 Comparison with DefaultNavbar

| Feature           | NavbarStandard   | DefaultNavbar        |
| ----------------- | ---------------- | -------------------- |
| **Position**      | `fixed` (top: 0) | `absolute`           |
| **Height**        | 64px (fixed)     | Variable             |
| **Margins**       | None (0)         | my={2}, mx={3}       |
| **Width**         | 100%             | calc(100% - 48px)    |
| **Border Radius** | None             | section              |
| **Use Case**      | App-wide navbar  | Page-specific navbar |

## 💡 Use Cases

### 1. Application-Wide Navbar

```jsx
// Perfect for main app navigation
<NavbarStandard brandName="My App" routes={mainRoutes} />
```

### 2. Dashboard Header

```jsx
// Fixed header for dashboard
<NavbarStandard
  brandName="Dashboard"
  routes={dashboardRoutes}
  action={{
    type: "internal",
    route: "/settings",
    color: "dark",
    label: "Settings",
  }}
/>
```

### 3. Landing Page Header

```jsx
// Clean header for landing pages
<NavbarStandard
  brandName="Product Name"
  action={{
    type: "internal",
    route: "/get-started",
    color: "info",
    label: "Get Started",
  }}
/>
```

## 🐛 Troubleshooting

### Content hidden behind navbar

```jsx
// ❌ Wrong - Content starts at top
<YourContent />

// ✅ Correct - Add padding
<Box sx={{ paddingTop: "64px" }}>
  <YourContent />
</Box>
```

### Navbar not visible

```jsx
// Check z-index of other elements
// NavbarStandard has zIndex: 1100
// Make sure no elements have higher z-index
```

### Mobile menu not working

```jsx
// Make sure DefaultNavbarMobile is available
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";
```

## 🎨 Customization

### Change Height

```jsx
// Modify in NavbarStandard/index.js
height: "80px",      // Change all three
minHeight: "80px",
maxHeight: "80px",

// Update content padding accordingly
<Box sx={{ paddingTop: "80px" }}>
```

### Change Background

```jsx
// In NavbarStandard/index.js
backgroundColor: darkMode
  ? palette.dark.main
  : palette.primary.main,  // Use primary color
```

### Add Logo Image

```jsx
// Modify brand section
<SoftBox component={Link} to="/" display="flex" alignItems="center">
  <img src={logo} alt="Logo" style={{ height: "32px", marginRight: "8px" }} />
  <SoftTypography variant="button" fontWeight="bold">
    {brandName}
  </SoftTypography>
</SoftBox>
```

## 🔗 Related Components

- `DefaultNavbar` - Floating navbar with margins
- `DashboardNavbar` - Dashboard-specific navbar
- `Sidenav` - Side navigation menu

## 📚 Examples in Codebase

Check `src/App.js` for implementation example.

## 🎓 Best Practices

1. **Use for app-wide navigation**: Main navbar across all pages
2. **Add content padding**: Always add 64px top padding to content
3. **Keep routes minimal**: Show only important routes in navbar
4. **Use action button wisely**: For primary CTA only
5. **Test mobile view**: Always check hamburger menu works

## 📝 TypeScript Support

```typescript
import NavbarStandard from "examples/Navbars/NavbarStandard";

interface Route {
  type: string;
  name: string;
  key: string;
  route: string;
  icon?: React.ReactNode;
  hidden?: boolean;
}

interface ActionButton {
  type: "internal" | "external";
  route: string;
  color?: string;
  label: string;
}

const MyNavbar: React.FC = () => (
  <NavbarStandard brandName="My App" routes={routes} action={actionButton} />
);
```

## 📄 License

Copyright 2023 Creative Tim (https://www.creative-tim.com)

---

**Need help?** Check the [Soft UI Dashboard React Documentation](https://www.creative-tim.com/learning-lab/react/overview/soft-ui-dashboard/)
