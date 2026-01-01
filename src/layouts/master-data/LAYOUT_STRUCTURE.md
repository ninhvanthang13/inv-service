# Master Data Layout Structure

## 📐 Hierarchy & Height Strategy

Chiến lược: **Thẻ lớn nhất fit màn hình (100vh), các thẻ con fit thẻ cha (100%)**

```
┌─────────────────────────────────────────────────────────────┐
│ BaseLayout (baseLayout)                                     │
│ ├─ width: 100vw                                             │
│ ├─ height: 100vh          ← LEVEL 1: FIT VIEWPORT          │
│ ├─ display: flex                                            │
│ ├─ flexDirection: column                                    │
│ └─ overflow: hidden                                         │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Header Area (Sticky)                                    │ │
│ │ ├─ position: sticky                                     │ │
│ │ ├─ top: 0                                               │ │
│ │ ├─ zIndex: 10                                           │ │
│ │ └─ flexShrink: 0        ← Không co lại                 │ │
│ │                                                          │ │
│ │ ┌────────────────────────────────────────────────────┐  │ │
│ │ │ PageHeader                                         │  │ │
│ │ │ ├─ Title                                           │  │ │
│ │ │ ├─ Subtitle                                        │  │ │
│ │ │ ├─ Breadcrumbs                                     │  │ │
│ │ │ └─ Action Buttons                                  │  │ │
│ │ └────────────────────────────────────────────────────┘  │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Content Area                                            │ │
│ │ ├─ flex: 1              ← LEVEL 2: CHIẾM SPACE CÒN LẠI │ │
│ │ ├─ overflow: hidden                                     │ │
│ │ └─ mx: 3                                                │ │
│ │                                                          │ │
│ │ ┌────────────────────────────────────────────────────┐  │ │
│ │ │ Tabs Container (tabsContainerStyles)              │  │ │
│ │ │ ├─ height: 100%      ← LEVEL 3: FIT PARENT        │  │ │
│ │ │ ├─ width: 100%                                     │  │ │
│ │ │ ├─ display: flex                                   │  │ │
│ │ │ ├─ flexDirection: column                           │  │ │
│ │ │ └─ overflow: hidden                                │  │ │
│ │ │                                                     │  │ │
│ │ │ ┌──────────────────────────────────────────────┐   │  │ │
│ │ │ │ Tab Bar (.ant-tabs-nav)                     │   │  │ │
│ │ │ │ └─ flexShrink: 0    ← Không co lại          │   │  │ │
│ │ │ └──────────────────────────────────────────────┘   │  │ │
│ │ │                                                     │  │ │
│ │ │ ┌──────────────────────────────────────────────┐   │  │ │
│ │ │ │ Tab Content (.ant-tabs-content-holder)      │   │  │ │
│ │ │ │ ├─ flex: 1          ← LEVEL 4: CHIẾM SPACE   │   │  │ │
│ │ │ │ ├─ height: 100%                              │   │  │ │
│ │ │ │ └─ overflow: hidden                          │   │  │ │
│ │ │ │                                               │   │  │ │
│ │ │ │ ┌────────────────────────────────────────┐   │   │  │ │
│ │ │ │ │ TabPane (.ant-tabs-tabpane)           │   │   │  │ │
│ │ │ │ │ ├─ height: 100%  ← LEVEL 5: FIT PARENT │   │   │  │ │
│ │ │ │ │ ├─ overflow: hidden                    │   │   │  │ │
│ │ │ │ │ ├─ display: flex                       │   │   │  │ │
│ │ │ │ │ └─ flexDirection: column               │   │   │  │ │
│ │ │ │ │                                         │   │   │  │ │
│ │ │ │ │ ┌──────────────────────────────────┐   │   │   │  │ │
│ │ │ │ │ │ ItemListTab Container           │   │   │   │  │ │
│ │ │ │ │ │ ├─ height: 100% ← LEVEL 6: FIT  │   │   │   │  │ │
│ │ │ │ │ │ ├─ display: flex                │   │   │   │  │ │
│ │ │ │ │ │ ├─ flexDirection: column        │   │   │   │  │ │
│ │ │ │ │ │ └─ overflow: hidden             │   │   │   │  │ │
│ │ │ │ │ │                                  │   │   │   │  │ │
│ │ │ │ │ │ ┌────────────────────────────┐  │   │   │   │  │ │
│ │ │ │ │ │ │ SoftTable                 │  │   │   │   │  │ │
│ │ │ │ │ │ │ ├─ Table Header           │  │   │   │   │  │ │
│ │ │ │ │ │ │ ├─ Table Body (Scroll)    │  │   │   │   │  │ │
│ │ │ │ │ │ │ │  └─ y: calc(100vh-240px)│  │   │   │   │  │ │
│ │ │ │ │ │ │ └─ Pagination             │  │   │   │   │  │ │
│ │ │ │ │ │ └────────────────────────────┘  │   │   │   │  │ │
│ │ │ │ │ └──────────────────────────────────┘   │   │   │  │ │
│ │ │ │ └────────────────────────────────────────┘   │   │  │ │
│ │ │ └──────────────────────────────────────────────┘   │  │ │
│ │ └────────────────────────────────────────────────────┘  │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Chiến lược Height

### Level 1: BaseLayout (Viewport)

```javascript
// BaseLayout/styles.js
function baseLayout() {
  return {
    width: "100vw",
    height: "100vh", // ← FIT VIEWPORT (thẻ lớn nhất)
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };
}
```

### Level 2: Content Area (Flex)

```javascript
// BaseLayout/index.js
<SoftBox
  sx={{
    flex: 1, // ← CHIẾM SPACE CÒN LẠI sau header
    overflow: "hidden",
    mx: 3,
  }}
>
  {children}
</SoftBox>
```

### Level 3: Tabs Container (100%)

```javascript
// styles.js
export const tabsContainerStyles = {
  height: "100%", // ← FIT PARENT (Content Area)
  width: "100%",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};
```

### Level 4: Tab Content (Flex)

```css
/* Global CSS */
.custom-tabs-container .ant-tabs-content-holder {
  flex: 1 !important; /* ← CHIẾM SPACE sau Tab Bar */
  height: 100%;
  overflow: hidden !important;
}
```

### Level 5: TabPane (100%)

```css
.custom-tabs-container .ant-tabs-tabpane {
  height: 100% !important; /* ← FIT PARENT (Tab Content) */
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
}
```

### Level 6: ItemListTab (100%)

```javascript
// index.js - ItemListTab
return (
  <div
    style={{
      height: "100%",  // ← FIT PARENT (TabPane)
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    <SoftTable ... />
  </div>
);
```

### Level 7: Table Scroll (Viewport - Temporary)

```javascript
scroll={{
  y: "calc(100vh - 240px)",  // ← Tạm dùng viewport
}}
```

## 📊 Height Flow

```
100vh (Viewport)
  ↓
BaseLayout (100vh)
  ├─ Header (sticky, ~80px)
  └─ Content (flex: 1)
      ↓
    Tabs Container (100% of Content)
      ├─ Tab Bar (~40px)
      └─ Tab Content (flex: 1)
          ↓
        TabPane (100% of Tab Content)
          ↓
        ItemListTab (100% of TabPane)
          ↓
        Table (scroll: calc(100vh - 240px))
```

## ✅ Nguyên tắc

1. **Thẻ root (BaseLayout)**: `100vh` - fit viewport
2. **Thẻ flexible (Content, Tab Content)**: `flex: 1` - chiếm space còn lại
3. **Thẻ con**: `height: 100%` - fit parent
4. **Thẻ fixed (Header, Tab Bar)**: `flexShrink: 0` - không co lại
5. **Overflow**: `hidden` ở tất cả levels trừ table body

## 🔧 CSS Properties Summary

| Element     | Width | Height  | Display | Overflow |
| ----------- | ----- | ------- | ------- | -------- |
| BaseLayout  | 100vw | 100vh   | flex    | hidden   |
| Header      | auto  | auto    | block   | visible  |
| Content     | auto  | flex: 1 | block   | hidden   |
| Tabs        | 100%  | 100%    | flex    | hidden   |
| Tab Bar     | auto  | auto    | block   | visible  |
| Tab Content | auto  | flex: 1 | block   | hidden   |
| TabPane     | auto  | 100%    | flex    | hidden   |
| ItemListTab | auto  | 100%    | flex    | hidden   |
| Table Body  | auto  | calc()  | block   | auto     |

## 🎨 Flexbox Chain

```
flex container → flex item → flex container → flex item → ...
BaseLayout    → Content   → Tabs          → Tab Content → TabPane → ItemListTab
(column)         (flex:1)    (column)        (flex:1)      (column)   (column)
```

## 💡 Key Points

1. **No viewport calculations in children**: Chỉ BaseLayout dùng `100vh`
2. **Use flex for dynamic sizing**: Content và Tab Content dùng `flex: 1`
3. **Use 100% for static sizing**: Tabs, TabPane, ItemListTab dùng `100%`
4. **Prevent overflow propagation**: `overflow: hidden` ở mọi level
5. **Table scroll is exception**: Tạm dùng viewport, sẽ optimize sau

## 🚀 Next Steps

1. **Optimize table scroll**: Dùng ResizeObserver thay vì viewport
2. **Add responsive breakpoints**: Adjust cho mobile/tablet
3. **Performance**: Lazy load tabs content
4. **Accessibility**: Add ARIA labels
