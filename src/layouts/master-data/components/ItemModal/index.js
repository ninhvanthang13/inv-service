/**
 * Item Modal Component
 * Modal for creating and editing items
 */

import { Modal, Form, Input, Radio, Space } from "antd";
import PropTypes from "prop-types";
import { t } from "locales";

const ItemModal = ({
  open,
  mode, // "create" or "edit"
  form,
  editingRecord,
  confirmLoading,
  onOk,
  onCancel,
  onFieldChange,
}) => {
  const isEditMode = mode === "edit";
  const title = isEditMode ? t("masterData.item.edit") : t("masterData.item.add");

  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      okText={t("common.save")}
      cancelText={t("common.cancel")}
      destroyOnClose={true}
      width={600}
      centered
      bodyStyle={{
        maxHeight: "calc(100vh - 200px)",
        overflowY: "auto",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name={isEditMode ? "form_edit_item" : "form_create_item"}
        initialValues={isEditMode ? editingRecord : {}}
      >
        <Form.Item
          label={t("masterData.item.name")}
          name="name"
          rules={[
            {
              required: true,
              message: t("validation.required", { field: t("masterData.item.name") }),
            },
          ]}
        >
          <Input
            placeholder={t("form.placeholder.input", { field: t("masterData.item.name") })}
            onChange={isEditMode ? (e) => onFieldChange("name", e.target.value) : undefined}
          />
        </Form.Item>

        <Form.Item
          label={t("masterData.item.code")}
          name="code"
          rules={[
            {
              required: true,
              message: t("validation.required", { field: t("masterData.item.code") }),
            },
          ]}
        >
          <Input
            placeholder={t("form.placeholder.input", { field: t("masterData.item.code") })}
            onChange={isEditMode ? (e) => onFieldChange("code", e.target.value) : undefined}
          />
        </Form.Item>

        <Form.Item
          label={t("masterData.item.category")}
          name="category"
          rules={[
            {
              required: true,
              message: t("validation.required", { field: t("masterData.item.category") }),
            },
          ]}
        >
          <Input
            placeholder={t("form.placeholder.input", { field: t("masterData.item.category") })}
            onChange={isEditMode ? (e) => onFieldChange("category", e.target.value) : undefined}
          />
        </Form.Item>

        <Form.Item
          label={t("masterData.item.price")}
          name="price"
          rules={[
            {
              required: true,
              message: t("validation.required", { field: t("masterData.item.price") }),
            },
            {
              type: "number",
              transform: (value) => Number(value),
              message: t("validation.number", { field: t("masterData.item.price") }),
            },
          ]}
        >
          <Input
            type="number"
            placeholder={t("form.placeholder.input", { field: t("masterData.item.price") })}
            onChange={
              isEditMode ? (e) => onFieldChange("price", Number(e.target.value)) : undefined
            }
          />
        </Form.Item>

        {isEditMode && (
          <>
            <Form.Item
              label={t("masterData.item.stock")}
              name="stock"
              rules={[
                {
                  required: true,
                  message: t("validation.required", { field: t("masterData.item.stock") }),
                },
              ]}
            >
              <Input
                type="number"
                placeholder={t("form.placeholder.input", { field: t("masterData.item.stock") })}
                onChange={(e) => onFieldChange("stock", Number(e.target.value))}
              />
            </Form.Item>

            <Form.Item
              label={t("common.status")}
              name="status"
              rules={[
                {
                  required: true,
                  message: t("validation.required", { field: t("common.status") }),
                },
              ]}
            >
              <Radio.Group onChange={(e) => onFieldChange("status", e.target.value)}>
                <Space>
                  <Radio value="active">{t("common.active")}</Radio>
                  <Radio value="inactive">{t("common.inactive")}</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

ItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(["create", "edit"]).isRequired,
  form: PropTypes.object.isRequired,
  editingRecord: PropTypes.object,
  confirmLoading: PropTypes.bool,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func,
};

ItemModal.defaultProps = {
  editingRecord: null,
  confirmLoading: false,
  onFieldChange: () => {},
};

export default ItemModal;
