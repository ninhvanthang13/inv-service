/**
 * Warehouse Modal Component
 * Modal for creating and editing warehouses
 */

import { Modal, Form, Input } from "antd";
import PropTypes from "prop-types";
import { t } from "locales";

const WarehouseModal = ({
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
  const title = isEditMode ? t("masterData.warehouse.edit") : t("masterData.warehouse.add");

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
        name={isEditMode ? "form_edit_warehouse" : "form_create_warehouse"}
        initialValues={isEditMode ? editingRecord : {}}
      >
        <Form.Item
          label={t("masterData.warehouse.name")}
          name="name"
          rules={[
            {
              required: true,
              message: t("validation.required", { field: t("masterData.warehouse.name") }),
            },
          ]}
        >
          <Input
            placeholder={t("form.placeholder.input", { field: t("masterData.warehouse.name") })}
            onChange={isEditMode ? (e) => onFieldChange("name", e.target.value) : undefined}
          />
        </Form.Item>

        <Form.Item
          label={t("masterData.warehouse.address")}
          name="address"
          rules={[
            {
              required: true,
              message: t("validation.required", { field: t("masterData.warehouse.address") }),
            },
          ]}
        >
          <Input
            placeholder={t("form.placeholder.input", { field: t("masterData.warehouse.address") })}
            onChange={isEditMode ? (e) => onFieldChange("address", e.target.value) : undefined}
          />
        </Form.Item>

        {isEditMode && (
          <>
            <Form.Item
              label={t("masterData.warehouse.manager")}
              name="manager"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input
                placeholder={t("form.placeholder.input", {
                  field: t("masterData.warehouse.manager"),
                })}
                onChange={(e) => onFieldChange("manager", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label={t("masterData.warehouse.phone")}
              name="phone"
              rules={[
                {
                  required: false,
                },
                {
                  pattern: /^[0-9]{10,11}$/,
                  message: t("validation.phone"),
                },
              ]}
            >
              <Input
                placeholder={t("form.placeholder.input", {
                  field: t("masterData.warehouse.phone"),
                })}
                onChange={(e) => onFieldChange("phone", e.target.value)}
              />
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

WarehouseModal.propTypes = {
  open: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(["create", "edit"]).isRequired,
  form: PropTypes.object.isRequired,
  editingRecord: PropTypes.object,
  confirmLoading: PropTypes.bool,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func,
};

WarehouseModal.defaultProps = {
  editingRecord: null,
  confirmLoading: false,
  onFieldChange: () => {},
};

export default WarehouseModal;
