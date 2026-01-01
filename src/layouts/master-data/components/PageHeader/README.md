# PageHeader Component

Component Header tùy chỉnh cho các trang trong hệ thống, được xây dựng dựa trên Soft UI Dashboard React theme.

## 📁 Vị trí

```
src/layouts/master-data/components/PageHeader/
├── index.js        # Component chính
├── styles.js       # Styles
├── examples.js     # Các ví dụ sử dụng
└── README.md       # Tài liệu này
```

## ✨ Tính năng

- ✅ Hiển thị tiêu đề và mô tả trang
- ✅ Icon tùy chỉnh với gradient background
- ✅ Action buttons (Thêm mới, Xuất Excel, v.v.)
- ✅ Breadcrumbs navigation
- ✅ Nút Back
- ✅ Responsive design
- ✅ Tích hợp hoàn toàn với Soft UI Dashboard theme

## 🚀 Cách sử dụng cơ bản

### 1. Import component

```javascript
import PageHeader from "layouts/master-data/components/PageHeader";
```

### 2. Sử dụng đơn giản

```javascript
<PageHeader title="Danh sách mặt hàng" />
```

### 3. Với icon và subtitle

```javascript
<PageHeader title="Quản lý kho" subtitle="Quản lý thông tin kho bãi và tồn kho" icon="warehouse" />
```

### 4. Với action buttons

```javascript
<PageHeader
  title="Danh sách mặt hàng"
  subtitle="Quản lý tất cả mặt hàng trong kho"
  icon="inventory_2"
  actionButtons={[
    {
      label: "Xuất Excel",
      onClick: handleExport,
      variant: "outlined",
      color: "dark",
      icon: "download",
    },
    {
      label: "Thêm mới",
      onClick: handleCreate,
      variant: "gradient",
      color: "info",
      icon: "add",
    },
  ]}
/>
```

### 5. Với breadcrumbs

```javascript
<PageHeader
  title="Chi tiết mặt hàng"
  icon="info"
  breadcrumbs={[
    { label: "Trang chủ", onClick: () => navigate("/") },
    { label: "Kho hàng", onClick: () => navigate("/inventory") },
    { label: "Chi tiết", active: true },
  ]}
/>
```

### 6. Với nút Back

```javascript
<PageHeader
  title="Chỉnh sửa mặt hàng"
  subtitle="Cập nhật thông tin mặt hàng"
  showBackButton
  onBack={() => navigate(-1)}
  actionButtons={[
    {
      label: "Hủy",
      onClick: handleCancel,
      variant: "outlined",
      color: "dark",
    },
    {
      label: "Lưu thay đổi",
      onClick: handleSave,
      variant: "gradient",
      color: "success",
      icon: "save",
    },
  ]}
/>
```

## 📝 Props

| Prop              | Type     | Default       | Required | Mô tả                    |
| ----------------- | -------- | ------------- | -------- | ------------------------ |
| `title`           | string   | -             | ✅       | Tiêu đề trang            |
| `subtitle`        | string   | ""            | ❌       | Mô tả ngắn về trang      |
| `icon`            | string   | null          | ❌       | Material Icon name       |
| `actionButtons`   | array    | []            | ❌       | Danh sách action buttons |
| `breadcrumbs`     | array    | null          | ❌       | Breadcrumb navigation    |
| `backgroundColor` | string   | "transparent" | ❌       | Màu nền                  |
| `showBackButton`  | boolean  | false         | ❌       | Hiển thị nút back        |
| `onBack`          | function | null          | ❌       | Callback khi click back  |

### ActionButton Object

```javascript
{
  label: string,        // Required - Text hiển thị
  onClick: function,    // Required - Callback khi click
  variant: string,      // Optional - "text" | "contained" | "gradient" | "outlined"
  color: string,        // Optional - "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark"
  size: string,         // Optional - "small" | "medium" | "large"
  icon: string,         // Optional - Material Icon name
  disabled: boolean,    // Optional - Disable button
}
```

### Breadcrumb Object

```javascript
{
  label: string,        // Required - Text hiển thị
  onClick: function,    // Optional - Callback khi click
  active: boolean,      // Optional - Đánh dấu breadcrumb hiện tại
}
```

## 🎨 Material Icons

Một số icon phổ biến bạn có thể sử dụng:

- `inventory_2` - Mặt hàng
- `warehouse` - Kho
- `history` - Lịch sử
- `dashboard` - Dashboard
- `add` - Thêm
- `edit` - Sửa
- `delete` - Xóa
- `download` - Tải xuống
- `upload` - Tải lên
- `save` - Lưu
- `search` - Tìm kiếm
- `filter_list` - Lọc
- `info` - Thông tin
- `settings` - Cài đặt

Xem thêm tại: [Material Icons](https://fonts.google.com/icons)

## 💡 Ví dụ thực tế

Xem file `examples.js` để biết thêm các ví dụ chi tiết.

## 🎯 Best Practices

1. **Luôn có title**: Title là prop bắt buộc và nên rõ ràng, ngắn gọn
2. **Sử dụng subtitle**: Giúp người dùng hiểu rõ hơn về trang
3. **Icon phù hợp**: Chọn icon phù hợp với nội dung trang
4. **Action buttons**: Đặt action quan trọng nhất ở cuối (bên phải)
5. **Breadcrumbs**: Sử dụng cho các trang chi tiết hoặc trang con
6. **Responsive**: Component tự động responsive, không cần thêm code

## 🔧 Tùy chỉnh

Nếu cần tùy chỉnh styles, bạn có thể:

1. Sửa file `styles.js`
2. Override styles bằng `sx` prop (nếu cần)
3. Tạo variant mới trong `styles.js`

## 📱 Responsive Behavior

- **Desktop**: Header hiển thị full với title, subtitle, breadcrumbs và buttons
- **Tablet**: Tương tự desktop nhưng font size nhỏ hơn
- **Mobile**:
  - Layout chuyển sang dạng column
  - Buttons xuống dòng
  - Font size giảm
  - Padding giảm

## 🐛 Troubleshooting

### Icon không hiển thị

- Đảm bảo bạn đã import Material Icons trong project
- Kiểm tra tên icon có đúng không

### Buttons không hoạt động

- Kiểm tra `onClick` callback có được định nghĩa không
- Kiểm tra console có lỗi không

### Styles không đúng

- Đảm bảo theme được cấu hình đúng
- Kiểm tra file `styles.js` có lỗi không

## 📞 Support

Nếu có vấn đề, hãy kiểm tra:

1. File `examples.js` - Các ví dụ chi tiết
2. Console log - Lỗi JavaScript
3. Theme configuration - Soft UI Dashboard theme
