# SoftTable Component

Component Table tùy chỉnh kết hợp Ant Design Table với Soft UI Dashboard theme.

## 📁 Vị trí

```
src/components/SoftTable/
├── index.js           # Component chính
├── SoftTableRoot.js   # Styles và theme integration
└── README.md          # Tài liệu này
```

## ✨ Tính năng

- ✅ Tích hợp hoàn toàn với Soft UI Dashboard theme
- ✅ Hỗ trợ Dark Mode
- ✅ Pagination tự động với translation
- ✅ Custom scrollbar đẹp mắt
- ✅ Gradient header
- ✅ Hover effects
- ✅ Responsive design
- ✅ Tất cả features của Ant Design Table

## 🚀 Cách sử dụng cơ bản

### 1. Import component

```javascript
import SoftTable from "components/SoftTable";
import { t, formatCurrency } from "locales";
```

### 2. Định nghĩa columns

```javascript
const columns = [
  {
    title: t("masterData.item.name"),
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: t("masterData.item.price"),
    dataIndex: "price",
    key: "price",
    render: (price) => formatCurrency(price),
  },
  {
    title: t("common.actions"),
    key: "action",
    render: (_, record) => (
      <Space>
        <a onClick={() => handleEdit(record)}>{t("common.edit")}</a>
        <a onClick={() => handleDelete(record)}>{t("common.delete")}</a>
      </Space>
    ),
  },
];
```

### 3. Sử dụng component

```javascript
<SoftTable
  columns={columns}
  dataSource={data}
  pagination={{
    pageSize: 10,
    showTotal: (total) => `Total: ${total} items`,
  }}
/>
```

## 📝 Props

Tất cả props của Ant Design Table đều được hỗ trợ:

| Prop           | Type            | Default      | Mô tả                  |
| -------------- | --------------- | ------------ | ---------------------- |
| `columns`      | array           | **Required** | Định nghĩa các cột     |
| `dataSource`   | array           | **Required** | Dữ liệu hiển thị       |
| `loading`      | boolean         | `false`      | Trạng thái loading     |
| `pagination`   | object/boolean  | `{}`         | Cấu hình pagination    |
| `rowSelection` | object          | `null`       | Cho phép chọn rows     |
| `scroll`       | object          | `null`       | Scroll config          |
| `size`         | string          | `"middle"`   | Kích thước table       |
| `bordered`     | boolean         | `false`      | Hiển thị border        |
| `sticky`       | boolean/object  | `false`      | Sticky header          |
| `rowKey`       | string/function | `"key"`      | Unique key cho mỗi row |

## 💡 Ví dụ nâng cao

### Với Row Selection

```javascript
const [selectedRowKeys, setSelectedRowKeys] = useState([]);

const rowSelection = {
  selectedRowKeys,
  onChange: (keys) => setSelectedRowKeys(keys),
};

<SoftTable columns={columns} dataSource={data} rowSelection={rowSelection} />;
```

### Với Sticky Header

```javascript
<SoftTable columns={columns} dataSource={data} sticky scroll={{ y: 400 }} />
```

### Với Expandable Rows

```javascript
<SoftTable
  columns={columns}
  dataSource={data}
  expandable={{
    expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
  }}
/>
```

### Với Custom Pagination

```javascript
<SoftTable
  columns={columns}
  dataSource={data}
  pagination={{
    current: page,
    pageSize: 20,
    total: totalItems,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ["10", "20", "50", "100"],
    onChange: (page, pageSize) => {
      setPage(page);
      setPageSize(pageSize);
    },
  }}
/>
```

### Với Sorting và Filtering

```javascript
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    filters: [
      { text: "Category A", value: "A" },
      { text: "Category B", value: "B" },
    ],
    onFilter: (value, record) => record.category === value,
  },
];

<SoftTable
  columns={columns}
  dataSource={data}
  onChange={(pagination, filters, sorter) => {
    console.log("Filters:", filters);
    console.log("Sorter:", sorter);
  }}
/>;
```

## 🎨 Customization

### Custom Header Color

Sửa trong `SoftTableRoot.js`:

```javascript
"& .ant-table-thead > tr > th": {
  backgroundColor: linearGradient(gradients.success.main, gradients.success.state),
  // ...
}
```

### Custom Row Styles

```javascript
<SoftTable
  columns={columns}
  dataSource={data}
  onRow={(record) => ({
    onClick: () => console.log(record),
    style: {
      backgroundColor: record.status === "active" ? "#f0f9ff" : "transparent",
    },
  })}
/>
```

## 🌙 Dark Mode

Component tự động hỗ trợ dark mode dựa vào `useSoftUIController`:

```javascript
const [controller] = useSoftUIController();
const { darkMode } = controller;

// Styles tự động thay đổi theo darkMode
```

## 📱 Responsive

Table tự động responsive với horizontal scroll trên mobile:

```javascript
<SoftTable
  columns={columns}
  dataSource={data}
  scroll={{ x: 1000 }} // Scroll ngang khi width < 1000px
/>
```

## 🔧 Best Practices

1. **Luôn set rowKey**: Đảm bảo mỗi row có unique key

   ```javascript
   <SoftTable rowKey="id" />
   ```

2. **Sử dụng pagination**: Cho data lớn

   ```javascript
   <SoftTable pagination={{ pageSize: 20 }} />
   ```

3. **Loading state**: Hiển thị khi fetch data

   ```javascript
   <SoftTable loading={isLoading} />
   ```

4. **Translation**: Sử dụng `t()` cho tất cả text

   ```javascript
   title: t("masterData.item.name");
   ```

5. **Format data**: Format giá, ngày tháng trong render
   ```javascript
   render: (price) => formatCurrency(price);
   ```

## 🐛 Troubleshooting

### Table không hiển thị

- Kiểm tra `columns` và `dataSource` có data không
- Kiểm tra `rowKey` có unique không

### Pagination không hoạt động

- Đảm bảo `pagination` prop được set đúng
- Kiểm tra `total` trong pagination config

### Styles không đúng

- Kiểm tra global styles đã được inject chưa
- Xem console có lỗi CSS không

## 📞 Support

Xem thêm:

- [Ant Design Table Docs](https://ant.design/components/table/)
- Soft UI Dashboard theme configuration
