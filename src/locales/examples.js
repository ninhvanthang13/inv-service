/**
 * Translation Usage Examples
 * Các ví dụ sử dụng hàm dịch ngôn ngữ
 */

import { t, tf, setLanguage, getLanguage, getSection, formatCurrency, formatDate } from "locales";
import { useState } from "react";

// ============================================
// Example 1: Basic Translation
// ============================================
function Example1() {
  return (
    <div>
      <h1>{t("masterData.item.title")}</h1>
      <p>{t("masterData.item.subtitle")}</p>
      <button>{t("common.add")}</button>
      <button>{t("common.edit")}</button>
      <button>{t("common.delete")}</button>
    </div>
  );
}

// ============================================
// Example 2: Translation with Parameters
// ============================================
function Example2() {
  const fieldName = "Tên mặt hàng";

  return (
    <div>
      {/* Hiển thị: "Tên mặt hàng là bắt buộc" */}
      <p>{t("validation.required", { field: fieldName })}</p>

      {/* Hiển thị: "Tên mặt hàng phải có ít nhất 3 ký tự" */}
      <p>{t("validation.minLength", { field: fieldName, min: 3 })}</p>

      {/* Hiển thị: "Tên mặt hàng không được vượt quá 100 ký tự" */}
      <p>{t("validation.maxLength", { field: fieldName, max: 100 })}</p>
    </div>
  );
}

// ============================================
// Example 3: Using in PageHeader Component
// ============================================
function Example3() {
  const [activeTab, setActiveTab] = useState("1");

  const getHeaderInfo = () => {
    switch (activeTab) {
      case "1":
        return {
          title: t("masterData.item.title"),
          subtitle: t("masterData.item.subtitle"),
          icon: "inventory_2",
        };
      case "2":
        return {
          title: t("masterData.warehouse.title"),
          subtitle: t("masterData.warehouse.subtitle"),
          icon: "warehouse",
        };
      case "3":
        return {
          title: t("masterData.history.title"),
          subtitle: t("masterData.history.subtitle"),
          icon: "history",
        };
      default:
        return {
          title: t("masterData.title"),
          subtitle: "",
          icon: "dashboard",
        };
    }
  };

  const getActionButtons = () => {
    if (activeTab === "3") return [];

    return [
      {
        label: t(activeTab === "1" ? "masterData.item.add" : "masterData.warehouse.add"),
        onClick: handleCreate,
        variant: "gradient",
        color: "info",
        icon: "add",
      },
    ];
  };

  const handleCreate = () => {
    console.log("Create");
  };

  const headerInfo = getHeaderInfo();

  return (
    <PageHeader
      title={headerInfo.title}
      subtitle={headerInfo.subtitle}
      icon={headerInfo.icon}
      actionButtons={getActionButtons()}
    />
  );
}

// ============================================
// Example 4: Using in Form
// ============================================
function Example4() {
  return (
    <Form layout="vertical">
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
      </Form.Item>

      <Form.Item
        label={t("masterData.item.price")}
        rules={[
          {
            required: true,
            message: t("validation.required", { field: t("masterData.item.price") }),
          },
          {
            type: "number",
            message: t("validation.number", { field: t("masterData.item.price") }),
          },
        ]}
      >
        <Input placeholder={t("form.placeholder.input", { field: t("masterData.item.price") })} />
      </Form.Item>

      <Form.Item>
        <Button type="primary">{t("common.save")}</Button>
        <Button>{t("common.cancel")}</Button>
      </Form.Item>
    </Form>
  );
}

// ============================================
// Example 5: Using in Messages
// ============================================
function Example5() {
  const handleSave = async () => {
    try {
      // Call API
      await saveData();

      // Show success message
      message.success(t("messages.success.save"));
    } catch (error) {
      // Show error message
      message.error(t("messages.error.save"));
    }
  };

  const handleDelete = () => {
    Modal.confirm({
      title: t("messages.confirm.delete"),
      onOk: async () => {
        try {
          await deleteData();
          message.success(t("messages.success.delete"));
        } catch (error) {
          message.error(t("messages.error.delete"));
        }
      },
    });
  };

  return (
    <div>
      <Button onClick={handleSave}>{t("common.save")}</Button>
      <Button onClick={handleDelete}>{t("common.delete")}</Button>
    </div>
  );
}

// ============================================
// Example 6: Language Switcher Component
// ============================================
function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState(getLanguage());

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCurrentLang(lang);
    // Reload page to apply new language
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange("vi")}
        style={{ fontWeight: currentLang === "vi" ? "bold" : "normal" }}
      >
        Tiếng Việt
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        style={{ fontWeight: currentLang === "en" ? "bold" : "normal" }}
      >
        English
      </button>
    </div>
  );
}

// ============================================
// Example 7: Using getSection
// ============================================
function Example7() {
  // Lấy tất cả translations trong section "common"
  const commonTranslations = getSection("common");

  return (
    <div>
      <button>{commonTranslations.add}</button>
      <button>{commonTranslations.edit}</button>
      <button>{commonTranslations.delete}</button>
      <button>{commonTranslations.save}</button>
    </div>
  );
}

// ============================================
// Example 8: Using Translation with Fallback
// ============================================
function Example8() {
  return (
    <div>
      {/* Nếu key không tồn tại, sẽ hiển thị fallback */}
      <h1>{tf("some.nonexistent.key", "Default Title")}</h1>

      {/* Nếu key tồn tại, sẽ hiển thị translation */}
      <h2>{tf("masterData.item.title", "Items")}</h2>
    </div>
  );
}

// ============================================
// Example 9: Formatting Numbers and Currency
// ============================================
function Example9() {
  const price = 1234567.89;
  const quantity = 1000;

  return (
    <div>
      {/* Format currency: 1.234.567,89 ₫ (Vietnamese) or $1,234,567.89 (English) */}
      <p>
        {t("masterData.item.price")}: {formatCurrency(price)}
      </p>

      {/* Format number: 1.000 (Vietnamese) or 1,000 (English) */}
      <p>
        {t("masterData.item.quantity")}: {formatNumber(quantity)}
      </p>

      {/* Format date */}
      <p>
        {t("common.date")}: {formatDate(new Date())}
      </p>
    </div>
  );
}

// ============================================
// Example 10: Complete Page with Translation
// ============================================
function ItemListPage() {
  const [activeTab, setActiveTab] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      // Call API
      await createItem();
      message.success(t("messages.success.create"));
      setIsModalOpen(false);
    } catch (error) {
      message.error(t("messages.error.create"));
    }
  };

  return (
    <BaseLayout
      headerInfo={{
        title: t("masterData.item.title"),
        subtitle: t("masterData.item.subtitle"),
        icon: "inventory_2",
      }}
      actionButtons={[
        {
          label: t("masterData.item.add"),
          onClick: handleCreate,
          variant: "gradient",
          color: "info",
          icon: "add",
        },
      ]}
    >
      {/* Page content */}
      <div>{/* Table, forms, etc. */}</div>

      <Modal
        title={t("masterData.item.add")}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        okText={t("common.save")}
        cancelText={t("common.cancel")}
      >
        <Form layout="vertical">
          <Form.Item
            label={t("masterData.item.name")}
            rules={[
              {
                required: true,
                message: t("validation.required", { field: t("masterData.item.name") }),
              },
            ]}
          >
            <Input
              placeholder={t("form.placeholder.input", { field: t("masterData.item.name") })}
            />
          </Form.Item>

          <Form.Item label={t("masterData.item.price")}>
            <Input
              placeholder={t("form.placeholder.input", { field: t("masterData.item.price") })}
            />
          </Form.Item>
        </Form>
      </Modal>
    </BaseLayout>
  );
}

export {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6,
  LanguageSwitcher,
  Example7,
  Example8,
  Example9,
  ItemListPage,
};
