# SoftLayout Component (Ant Design Grid)

A flexible, theme-integrated layout component using Ant Design Grid system for Soft UI Dashboard React.

## 📋 Overview

`SoftLayout` is a powerful grid-based layout container that wraps Ant Design's Grid system (`Row` and `Col`) with Soft UI Dashboard theme integration. It provides responsive 24-column grid layouts with theme-aware styling.

## 🎯 Features

- ✅ **Ant Design Grid System**: 24-column responsive grid
- ✅ **Multiple Layout Variants**: Fullscreen, Contained, Fluid
- ✅ **Responsive Breakpoints**: xs, sm, md, lg, xl, xxl
- ✅ **Flexible Gutter**: Horizontal and vertical spacing
- ✅ **Theme Integration**: Soft UI Dashboard colors and styles
- ✅ **Alignment Control**: Justify and align content
- ✅ **Overflow Control**: Visible, Hidden, Auto, Scroll

## 📦 Installation

Already included in Soft UI Dashboard React template.

```javascript
import SoftLayout, { SoftLayoutItem } from "components/SoftLayout";
```

## 🚀 Basic Usage

### Simple Grid Layout

```jsx
import SoftLayout, { SoftLayoutItem } from "components/SoftLayout";

function App() {
  return (
    <SoftLayout>
      <SoftLayoutItem span={12}>
        <LeftContent />
      </SoftLayoutItem>
      <SoftLayoutItem span={12}>
        <RightContent />
      </SoftLayoutItem>
    </SoftLayout>
  );
}
```

### Responsive Grid

```jsx
<SoftLayout gutter={[16, 16]}>
  <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
    <Card />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
    <Card />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
    <Card />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
    <Card />
  </SoftLayoutItem>
</SoftLayout>
```

## 📐 Ant Design Grid Basics

### 24-Column System

```jsx
<SoftLayout>
  <SoftLayoutItem span={6}>  {/* 25% width */}
  <SoftLayoutItem span={12}> {/* 50% width */}
  <SoftLayoutItem span={6}>  {/* 25% width */}
</SoftLayout>
```

### Responsive Columns

```jsx
<SoftLayoutItem
  xs={24} // Mobile: full width
  sm={12} // Tablet: half width
  md={8} // Desktop: 1/3 width
  lg={6} // Large: 1/4 width
/>
```

### Offset

```jsx
<SoftLayoutItem span={12} offset={6}>
  {/* Centered 50% width with 25% offset on each side */}
</SoftLayoutItem>
```

## 🎨 Props

### SoftLayout (Row) Props

| Prop           | Type                                                                                            | Default         | Description                        |
| -------------- | ----------------------------------------------------------------------------------------------- | --------------- | ---------------------------------- |
| `variant`      | `"fullscreen"` \| `"contained"` \| `"fluid"`                                                    | `"fullscreen"`  | Layout variant                     |
| `gutter`       | `number` \| `[number, number]` \| `object`                                                      | `[16, 16]`      | Grid gutter (horizontal, vertical) |
| `justify`      | `"start"` \| `"end"` \| `"center"` \| `"space-around"` \| `"space-between"` \| `"space-evenly"` | `"start"`       | Horizontal alignment               |
| `align`        | `"top"` \| `"middle"` \| `"bottom"` \| `"stretch"`                                              | `"top"`         | Vertical alignment                 |
| `wrap`         | `boolean`                                                                                       | `true`          | Enable flex wrap                   |
| `bgColor`      | `string`                                                                                        | `"transparent"` | Background color                   |
| `opacity`      | `number`                                                                                        | `1`             | Opacity (0-1)                      |
| `borderRadius` | `string`                                                                                        | `"none"`        | Border radius                      |
| `shadow`       | `string`                                                                                        | `"none"`        | Box shadow                         |
| `overflow`     | `"visible"` \| `"hidden"` \| `"auto"` \| `"scroll"`                                             | `"hidden"`      | Overflow behavior                  |

### SoftLayoutItem (Col) Props

| Prop     | Type                 | Default | Description              |
| -------- | -------------------- | ------- | ------------------------ |
| `span`   | `number`             | -       | Number of columns (0-24) |
| `offset` | `number`             | `0`     | Left offset columns      |
| `push`   | `number`             | `0`     | Right offset columns     |
| `pull`   | `number`             | `0`     | Left pull columns        |
| `order`  | `number`             | `0`     | Flex order               |
| `xs`     | `number` \| `object` | -       | `<576px` responsive      |
| `sm`     | `number` \| `object` | -       | `≥576px` responsive      |
| `md`     | `number` \| `object` | -       | `≥768px` responsive      |
| `lg`     | `number` \| `object` | -       | `≥992px` responsive      |
| `xl`     | `number` \| `object` | -       | `≥1200px` responsive     |
| `xxl`    | `number` \| `object` | -       | `≥1600px` responsive     |

## 🎯 Layout Variants

### 1. Fullscreen (Default)

```jsx
<SoftLayout variant="fullscreen">{/* 100vw × 100vh */}</SoftLayout>
```

### 2. Contained

```jsx
<SoftLayout variant="contained">{/* 100% × 100% of parent */}</SoftLayout>
```

### 3. Fluid

```jsx
<SoftLayout variant="fluid">{/* 100% width, min-height 100vh */}</SoftLayout>
```

## 💡 Advanced Examples

### Dashboard Layout (Sidebar + Content)

```jsx
<SoftLayout variant="fullscreen" gutter={0}>
  <SoftLayoutItem span={4}>
    <Sidebar />
  </SoftLayoutItem>
  <SoftLayoutItem span={20}>
    <MainContent />
  </SoftLayoutItem>
</SoftLayout>
```

### Responsive Dashboard

```jsx
<SoftLayout variant="fullscreen" gutter={[16, 16]}>
  <SoftLayoutItem xs={24} lg={6}>
    <Sidebar />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} lg={18}>
    <MainContent />
  </SoftLayoutItem>
</SoftLayout>
```

### Card Grid

```jsx
<SoftLayout gutter={[24, 24]} justify="center">
  {cards.map((card, index) => (
    <SoftLayoutItem key={index} xs={24} sm={12} md={8} lg={6}>
      <Card {...card} />
    </SoftLayoutItem>
  ))}
</SoftLayout>
```

### Centered Content

```jsx
<SoftLayout justify="center" align="middle" variant="fullscreen">
  <SoftLayoutItem span={12}>
    <LoginForm />
  </SoftLayoutItem>
</SoftLayout>
```

### With Theme Colors

```jsx
<SoftLayout variant="contained" bgColor="primary" borderRadius="xl" shadow="lg" gutter={[16, 16]}>
  <SoftLayoutItem span={24}>
    <Header />
  </SoftLayoutItem>
  <SoftLayoutItem span={24}>
    <Content />
  </SoftLayoutItem>
</SoftLayout>
```

### Nested Grids

```jsx
<SoftLayout gutter={[16, 16]}>
  <SoftLayoutItem span={24}>
    <Header />
  </SoftLayoutItem>
  <SoftLayoutItem span={24}>
    <SoftLayout gutter={[8, 8]}>
      <SoftLayoutItem span={8}>
        <Card1 />
      </SoftLayoutItem>
      <SoftLayoutItem span={8}>
        <Card2 />
      </SoftLayoutItem>
      <SoftLayoutItem span={8}>
        <Card3 />
      </SoftLayoutItem>
    </SoftLayout>
  </SoftLayoutItem>
</SoftLayout>
```

## 📏 Gutter Presets

```javascript
import { gutterPresets } from "components/SoftLayout/SoftLayoutRoot";

<SoftLayout gutter={gutterPresets.md}>  {/* [16, 16] */}
<SoftLayout gutter={gutterPresets.lg}>  {/* [24, 24] */}
<SoftLayout gutter={gutterPresets.xl}>  {/* [32, 32] */}
```

Available presets:

- `none`: 0
- `xs`: [8, 8]
- `sm`: [12, 12]
- `md`: [16, 16]
- `lg`: [24, 24]
- `xl`: [32, 32]
- `xxl`: [48, 48]

## 📱 Responsive Breakpoints

```javascript
import { breakpoints } from "components/SoftLayout/SoftLayoutRoot";

// xs: 480px   - Mobile
// sm: 576px   - Tablet
// md: 768px   - Small desktop
// lg: 992px   - Desktop
// xl: 1200px  - Large desktop
// xxl: 1600px - Extra large desktop
```

### Responsive Gutter

```jsx
<SoftLayout
  gutter={{
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
  }}
>
```

## 🏗️ Common Patterns

### Master-Detail Layout

```jsx
<SoftLayout variant="fullscreen" gutter={0}>
  <SoftLayoutItem xs={24} lg={8}>
    <MasterList />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} lg={16}>
    <DetailView />
  </SoftLayoutItem>
</SoftLayout>
```

### Three Column Layout

```jsx
<SoftLayout gutter={[16, 16]}>
  <SoftLayoutItem xs={24} md={6}>
    <LeftSidebar />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} md={12}>
    <MainContent />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} md={6}>
    <RightSidebar />
  </SoftLayoutItem>
</SoftLayout>
```

### Form Layout

```jsx
<SoftLayout gutter={[16, 16]}>
  <SoftLayoutItem xs={24} sm={12}>
    <FormField label="First Name" />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24} sm={12}>
    <FormField label="Last Name" />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24}>
    <FormField label="Email" />
  </SoftLayoutItem>
  <SoftLayoutItem xs={24}>
    <Button type="submit">Submit</Button>
  </SoftLayoutItem>
</SoftLayout>
```

### Gallery Grid

```jsx
<SoftLayout gutter={[8, 8]}>
  {images.map((img, i) => (
    <SoftLayoutItem key={i} xs={12} sm={8} md={6} lg={4} xl={3}>
      <Image src={img} />
    </SoftLayoutItem>
  ))}
</SoftLayout>
```

## ⚡ Performance Tips

1. **Use appropriate gutter**: Don't use excessive spacing
2. **Avoid deep nesting**: Keep grid hierarchy shallow (max 2-3 levels)
3. **Use span wisely**: Prefer responsive props over fixed span
4. **Memoize children**: Use React.memo for grid items
5. **Set keys properly**: Always use unique keys in mapped items

## 🎨 Alignment Examples

### Horizontal Alignment

```jsx
<SoftLayout justify="start">      {/* Left */}
<SoftLayout justify="center">     {/* Center */}
<SoftLayout justify="end">        {/* Right */}
<SoftLayout justify="space-between">  {/* Space between */}
<SoftLayout justify="space-around">   {/* Space around */}
<SoftLayout justify="space-evenly">   {/* Space evenly */}
```

### Vertical Alignment

```jsx
<SoftLayout align="top">      {/* Top */}
<SoftLayout align="middle">   {/* Middle */}
<SoftLayout align="bottom">   {/* Bottom */}
<SoftLayout align="stretch">  {/* Stretch */}
```

### Combined

```jsx
<SoftLayout justify="center" align="middle" variant="fullscreen">
  <SoftLayoutItem span={12}>{/* Perfectly centered */}</SoftLayoutItem>
</SoftLayout>
```

## 🐛 Troubleshooting

### Columns not wrapping

```jsx
// ❌ Wrong
<SoftLayout wrap={false}>

// ✅ Correct
<SoftLayout wrap={true}>  {/* or omit, true is default */}
```

### Total span exceeds 24

```jsx
// ❌ Wrong - Total = 30
<SoftLayoutItem span={10} />
<SoftLayoutItem span={10} />
<SoftLayoutItem span={10} />

// ✅ Correct - Total = 24
<SoftLayoutItem span={8} />
<SoftLayoutItem span={8} />
<SoftLayoutItem span={8} />
```

### Gutter not working

```jsx
// ❌ Wrong
<SoftLayout gutter="16">

// ✅ Correct
<SoftLayout gutter={16}>           {/* Number */}
<SoftLayout gutter={[16, 16]}>     {/* Array */}
<SoftLayout gutter={{ xs: 8, sm: 16 }}>  {/* Object */}
```

## 🔗 Related Components

- `SoftBox` - General-purpose box component
- `SoftTable` - Themed table component
- Ant Design `Row` and `Col` - Original grid components

## 📚 Examples in Codebase

Check these files for real-world usage:

- `src/layouts/master-data/index.js`
- `src/layouts/dashboard/index.js`

## 🎓 Best Practices

1. **Use SoftLayout for page layouts**: Main containers
2. **Use SoftLayoutItem for grid columns**: Always wrap in SoftLayout
3. **Set responsive breakpoints**: xs, sm, md, lg, xl, xxl
4. **Use gutter consistently**: Stick to preset values
5. **Avoid inline styles**: Use theme props instead
6. **Test on mobile**: Always check responsive behavior

## 📝 Migration from Flexbox

```jsx
// Before (Flexbox)
<div style={{
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
}}>
  <div style={{ flex: 1 }}>Left</div>
  <div style={{ flex: 1 }}>Right</div>
</div>

// After (Grid)
<SoftLayout gutter={16} justify="space-between">
  <SoftLayoutItem span={12}>Left</SoftLayoutItem>
  <SoftLayoutItem span={12}>Right</SoftLayoutItem>
</SoftLayout>
```

## 📄 License

Copyright 2023 Creative Tim (https://www.creative-tim.com)

---

**Need help?** Check the [Ant Design Grid Documentation](https://ant.design/components/grid)
