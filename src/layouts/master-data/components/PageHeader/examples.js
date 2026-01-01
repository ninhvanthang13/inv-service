/**
=========================================================
* PageHeader Component - Usage Examples
=========================================================

This file demonstrates various ways to use the PageHeader component.
*/

import PageHeader from "layouts/master-data/components/PageHeader";

// ============================================
// Example 1: Basic Header with Title Only
// ============================================
function Example1() {
  return <PageHeader title="Danh sách mặt hàng" />;
}

// ============================================
// Example 2: Header with Icon and Subtitle
// ============================================
function Example2() {
  return (
    <PageHeader
      title="Quản lý kho"
      subtitle="Quản lý thông tin kho bãi và tồn kho"
      icon="warehouse"
    />
  );
}

// ============================================
// Example 3: Header with Action Buttons
// ============================================
function Example3() {
  const handleCreate = () => {
    console.log("Create new item");
  };

  const handleExport = () => {
    console.log("Export data");
  };

  return (
    <PageHeader
      title="Danh sách mặt hàng"
      subtitle="Quản lý tất cả mặt hàng trong hệ thống"
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
  );
}

// ============================================
// Example 4: Header with Breadcrumbs
// ============================================
function Example4() {
  const handleNavigateHome = () => {
    console.log("Navigate to home");
  };

  const handleNavigateInventory = () => {
    console.log("Navigate to inventory");
  };

  return (
    <PageHeader
      title="Chi tiết mặt hàng"
      icon="info"
      breadcrumbs={[
        { label: "Trang chủ", onClick: handleNavigateHome },
        { label: "Kho hàng", onClick: handleNavigateInventory },
        { label: "Chi tiết", active: true },
      ]}
    />
  );
}

// ============================================
// Example 5: Header with Back Button
// ============================================
function Example5() {
  const handleBack = () => {
    console.log("Go back");
  };

  const handleSave = () => {
    console.log("Save changes");
  };

  return (
    <PageHeader
      title="Chỉnh sửa mặt hàng"
      subtitle="Cập nhật thông tin mặt hàng"
      showBackButton
      onBack={handleBack}
      actionButtons={[
        {
          label: "Hủy",
          onClick: handleBack,
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
  );
}

// ============================================
// Example 6: Complete Example with All Features
// ============================================
function Example6() {
  const handleBack = () => console.log("Back");
  const handleHome = () => console.log("Home");
  const handleInventory = () => console.log("Inventory");
  const handleFilter = () => console.log("Filter");
  const handleExport = () => console.log("Export");
  const handleCreate = () => console.log("Create");

  return (
    <PageHeader
      title="Quản lý mặt hàng"
      subtitle="Danh sách tất cả mặt hàng trong kho"
      icon="inventory"
      showBackButton
      onBack={handleBack}
      breadcrumbs={[
        { label: "Trang chủ", onClick: handleHome },
        { label: "Kho hàng", onClick: handleInventory },
        { label: "Danh sách", active: true },
      ]}
      actionButtons={[
        {
          label: "Lọc",
          onClick: handleFilter,
          variant: "outlined",
          color: "dark",
          icon: "filter_list",
          size: "small",
        },
        {
          label: "Xuất Excel",
          onClick: handleExport,
          variant: "outlined",
          color: "success",
          icon: "download",
          size: "small",
        },
        {
          label: "Thêm mới",
          onClick: handleCreate,
          variant: "gradient",
          color: "info",
          icon: "add",
          size: "small",
        },
      ]}
    />
  );
}

// ============================================
// Example 7: Using in Your Page
// ============================================
function YourPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  return (
    <BaseLayout>
      <PageHeader
        title="Danh sách mặt hàng"
        subtitle="Quản lý mặt hàng trong kho"
        icon="inventory_2"
        actionButtons={[
          {
            label: "Thêm mới",
            onClick: handleCreate,
            variant: "gradient",
            color: "info",
            icon: "add",
          },
        ]}
      />

      {/* Your page content here */}
      <div>{/* Tables, forms, etc. */}</div>
    </BaseLayout>
  );
}

export { Example1, Example2, Example3, Example4, Example5, Example6, YourPage };
