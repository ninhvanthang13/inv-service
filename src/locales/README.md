# Hệ thống Đa ngôn ngữ (i18n)

Hệ thống đa ngôn ngữ cho ứng dụng Inventory Service, hỗ trợ Tiếng Việt và Tiếng Anh.

## 📁 Cấu trúc thư mục

```
src/locales/
├── vi.js              # Bản dịch tiếng Việt
├── en.js              # Bản dịch tiếng Anh
├── CommonFunction.js  # Các hàm tiện ích dịch thuật
├── index.js           # Export tất cả
├── examples.js        # Ví dụ sử dụng
└── README.md          # Tài liệu này
```

## 🚀 Cài đặt & Sử dụng

### 1. Import hàm translate

```javascript
import { t } from "locales";
// hoặc
import { t } from "locales/CommonFunction";
```

### 2. Sử dụng cơ bản

```javascript
// Dịch đơn giản
<h1>{t("masterData.item.title")}</h1>
// Output: "Danh sách mặt hàng"

<button>{t("common.add")}</button>
// Output: "Thêm mới"
```

### 3. Dịch với tham số

```javascript
// Với 1 tham số
t("validation.required", { field: "Tên" });
// Output: "Tên là bắt buộc"

// Với nhiều tham số
t("validation.minLength", { field: "Mật khẩu", min: 6 });
// Output: "Mật khẩu phải có ít nhất 6 ký tự"
```

## 📚 Các hàm có sẵn

### `t(key, params)` - Hàm dịch chính

```javascript
t("common.add"); // => "Thêm mới"
t("validation.required", { field: "Tên" }); // => "Tên là bắt buộc"
t("validation.minLength", { field: "Mật khẩu", min: 6 }); // => "Mật khẩu phải có ít nhất 6 ký tự"
```

### `tf(key, fallback, params)` - Dịch với fallback

```javascript
tf("some.key", "Default Text"); // => "Default Text" (nếu key không tồn tại)
tf("common.add", "Add"); // => "Thêm mới" (nếu key tồn tại)
```

### `setLanguage(lang)` - Đổi ngôn ngữ

```javascript
setLanguage("vi"); // Chuyển sang tiếng Việt
setLanguage("en"); // Chuyển sang tiếng Anh
```

### `getLanguage()` - Lấy ngôn ngữ hiện tại

```javascript
const currentLang = getLanguage(); // => "vi" hoặc "en"
```

### `getSection(section)` - Lấy toàn bộ section

```javascript
const common = getSection("common");
// => { add: "Thêm mới", edit: "Chỉnh sửa", ... }

console.log(common.add); // => "Thêm mới"
console.log(common.edit); // => "Chỉnh sửa"
```

### `formatCurrency(amount, currency)` - Format tiền tệ

```javascript
formatCurrency(1234567.89); // => "1.234.567,89 ₫" (tiếng Việt)
formatCurrency(1234567.89, "USD"); // => "$1,234,567.89" (tiếng Anh)
```

### `formatNumber(number)` - Format số

```javascript
formatNumber(1000); // => "1.000" (tiếng Việt) hoặc "1,000" (tiếng Anh)
formatNumber(1234.56); // => "1.234,56" (tiếng Việt) hoặc "1,234.56" (tiếng Anh)
```

### `formatDate(date, options)` - Format ngày

```javascript
formatDate(new Date()); // => "14/12/2025" (tiếng Việt)
formatDate(new Date(), {
  year: "numeric",
  month: "long",
  day: "numeric",
}); // => "14 tháng 12, 2025"
```

## 🎯 Sử dụng trong Component

### Trong PageHeader

```javascript
import { t } from "locales";

<PageHeader
  title={t("masterData.item.title")}
  subtitle={t("masterData.item.subtitle")}
  icon="inventory_2"
  actionButtons={[
    {
      label: t("masterData.item.add"),
      onClick: handleCreate,
      variant: "gradient",
      color: "info",
      icon: "add",
    },
  ]}
/>;
```

### Trong Form

```javascript
import { t } from "locales";

<Form.Item
  label={t("masterData.item.name")}
  rules={[
    {
      required: true,
      message: t("validation.required", { field: t("masterData.item.name") }),
    },
  ]}
>
  <Input placeholder={t("form.placeholder.input", { field: t("masterData.item.name") })} />
</Form.Item>;
```

### Trong Messages

```javascript
import { t } from "locales";
import { message } from "antd";

const handleSave = async () => {
  try {
    await saveData();
    message.success(t("messages.success.save"));
  } catch (error) {
    message.error(t("messages.error.save"));
  }
};
```

### Trong Modal Confirm

```javascript
import { t } from "locales";
import { Modal } from "antd";

const handleDelete = () => {
  Modal.confirm({
    title: t("messages.confirm.delete"),
    onOk: async () => {
      await deleteData();
      message.success(t("messages.success.delete"));
    },
  });
};
```

## 🌍 Language Switcher Component

```javascript
import { setLanguage, getLanguage } from "locales";
import { useState } from "react";

function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState(getLanguage());

  const handleChange = (lang) => {
    setLanguage(lang);
    setCurrentLang(lang);
    window.location.reload(); // Reload để áp dụng ngôn ngữ mới
  };

  return (
    <div>
      <button
        onClick={() => handleChange("vi")}
        style={{ fontWeight: currentLang === "vi" ? "bold" : "normal" }}
      >
        Tiếng Việt
      </button>
      <button
        onClick={() => handleChange("en")}
        style={{ fontWeight: currentLang === "en" ? "bold" : "normal" }}
      >
        English
      </button>
    </div>
  );
}
```

## 📝 Cấu trúc Translation Keys

### Common (Chung)

- `common.add` - Thêm mới
- `common.edit` - Chỉnh sửa
- `common.delete` - Xóa
- `common.save` - Lưu
- `common.cancel` - Hủy
- ... (xem thêm trong `vi.js`)

### Master Data

- `masterData.item.title` - Danh sách mặt hàng
- `masterData.item.add` - Thêm mặt hàng
- `masterData.warehouse.title` - Thông tin kho
- `masterData.history.title` - Lịch sử nhập
- ... (xem thêm trong `vi.js`)

### Messages

- `messages.success.create` - Tạo mới thành công!
- `messages.error.create` - Tạo mới thất bại!
- `messages.confirm.delete` - Bạn có chắc chắn muốn xóa?
- ... (xem thêm trong `vi.js`)

### Validation

- `validation.required` - {field} là bắt buộc
- `validation.minLength` - {field} phải có ít nhất {min} ký tự
- `validation.email` - Email không hợp lệ
- ... (xem thêm trong `vi.js`)

## ➕ Thêm Translation Mới

### 1. Thêm vào file `vi.js`

```javascript
const vi = {
  // ... existing translations
  myModule: {
    title: "Tiêu đề module của tôi",
    subtitle: "Mô tả module",
    action: "Hành động",
  },
};
```

### 2. Thêm vào file `en.js` (tương ứng)

```javascript
const en = {
  // ... existing translations
  myModule: {
    title: "My Module Title",
    subtitle: "Module description",
    action: "Action",
  },
};
```

### 3. Sử dụng

```javascript
t("myModule.title"); // => "Tiêu đề module của tôi"
t("myModule.subtitle"); // => "Mô tả module"
```

## 🔧 Best Practices

1. **Luôn sử dụng translation keys** thay vì hardcode text

   ```javascript
   // ❌ Không tốt
   <button>Thêm mới</button>

   // ✅ Tốt
   <button>{t("common.add")}</button>
   ```

2. **Sử dụng parameters cho dynamic content**

   ```javascript
   // ❌ Không tốt
   `${fieldName} là bắt buộc`;

   // ✅ Tốt
   t("validation.required", { field: fieldName });
   ```

3. **Group translations theo module**

   ```javascript
   // ✅ Tốt - Dễ quản lý
   masterData.item.title;
   masterData.item.add;
   masterData.warehouse.title;
   ```

4. **Sử dụng fallback cho optional translations**

   ```javascript
   tf("optional.key", "Default Text");
   ```

5. **Format numbers và dates theo locale**
   ```javascript
   // ✅ Tốt
   formatCurrency(price);
   formatDate(date);
   ```

## 🐛 Troubleshooting

### Translation không hiển thị

- Kiểm tra key có đúng không
- Kiểm tra file `vi.js` và `en.js` có key đó không
- Xem console log có warning không

### Ngôn ngữ không thay đổi

- Đảm bảo đã gọi `setLanguage(lang)`
- Reload trang sau khi đổi ngôn ngữ
- Kiểm tra localStorage có lưu ngôn ngữ không

### Parameters không được thay thế

- Đảm bảo sử dụng đúng format `{paramName}` trong translation
- Truyền đúng object params vào hàm `t()`

## 📞 Support

Xem thêm ví dụ chi tiết trong file `examples.js`
