/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftAvatar from "components/SoftAvatar";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// VR dashboards components
import BaseLayout from "layouts/master-data/components/BaseLayout";

// VRInfo dashboards components
import TodoList from "layouts/master-data/components/TodoList";
import TodoCard from "layouts/master-data/components/TodoCard";
import Emails from "layouts/master-data/components/Emails";
import MediaPlayer from "layouts/master-data/components/MediaPlayer";
import Messages from "layouts/master-data/components/Messages";

// Images
import team1 from "assets/images/team-1.jpg";
import sunCloud from "assets/images/small-logos/icon-sun-cloud.png";
import { Button, Flex, Form, Input, Modal, Radio, Space, Table, Tabs, Tag, message } from "antd";
import { classNamesFn, stylesFn } from "./components/BaseLayout/styles";
import PageHeader from "./components/PageHeader";
import { DeleteOutlined, EditOutlined, ListAltOutlined } from "@mui/icons-material";
import { t, formatCurrency } from "locales";
import SoftTable from "components/SoftTable";

// Modal Components
import ItemModal from "./components/ItemModal";
import WarehouseModal from "./components/WarehouseModal";

// Custom styles for tabs
import { tabsContainerStyles, tabsStyles, tabBarStyles, injectTabsStyles } from "./styles";
import { useEffect } from "react";
import { ButtonBase } from "@mui/material";

function VRInfo() {
  const { d1, h2, fontWeightMedium } = typography;
  const [tabPlacement, setTabPlacement] = useState("end");
  const [activeTab, setActiveTab] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  // Edit Modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // Inject global styles for tabs
  useEffect(() => {
    injectTabsStyles();
  }, []);

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleFieldChange = (field, value) => {
    if (editingRecord) {
      setEditingRecord({ ...editingRecord, [field]: value });
    }
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      switch (activeTab) {
        case "1":
          console.log("Dữ liệu Mặt hàng:", values);
          message.success(t("messages.success.create"));
          break;

        case "2":
          console.log("Dữ liệu Kho:", values);
          message.success(t("messages.success.create"));
          break;

        case "3":
          console.log("Call API: createHistoryLog");
          break;

        default:
          break;
      }

      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.log("Validate Failed:", error);
    }
  };

  const handleEditOk = async () => {
    try {
      const values = await form.validateFields();
      setConfirmLoading(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Updated record:", { ...editingRecord, ...values });
        message.success(t("messages.success.update"));
        setIsEditModalOpen(false);
        setConfirmLoading(false);
        setEditingRecord(null);
        form.resetFields();
      }, 1500);
    } catch (error) {
      console.log("Validate Failed:", error);
      setConfirmLoading(false);
    }
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
    setEditingRecord(null);
    form.resetFields();
  };

  const changeTabPlacement = (e) => {
    setTabPlacement(e.target.value);
  };

  // const propsItem = {
  //   itemCode,
  //   itemName,
  //   itemClass,
  //   itemType,
  //   itemProperty,
  //   methodValue,
  //   shelfLife,
  //   leadTime,
  //   stockUnit,
  //   safetyStock,
  //   maxOnhand,
  //   minOnhand,
  //   reorderLevel,
  //   reorderQuantity,
  // };

  const ItemListTab = () => {
    const columns = [
      {
        title: t("masterData.item.code"),
        dataIndex: "code",
        key: "code",
        width: 120,
        render: (text) => <a>{text}</a>,
        fixed: "left",
      },
      {
        title: t("masterData.item.name"),
        dataIndex: "name",
        key: "name",
        width: 250,
        fixed: "left",
      },
      {
        title: t("masterData.item.itemClass"),
        dataIndex: "itemClass",
        key: "itemClass",
        width: 200,
      },
      {
        title: t("masterData.item.itemType"),
        dataIndex: "itemType",
        key: "itemType",
        width: 200,
      },
      {
        title: t("masterData.item.itemProperty"),
        dataIndex: "itemProperty",
        key: "itemProperty",
        width: 200,
      },
      {
        title: t("masterData.item.stockUnit"),
        dataIndex: "stockUnit",
        key: "stockUnit",
        width: 200,
      },
      {
        title: t("masterData.item.lastCost"),
        dataIndex: "lastCost",
        key: "lastCost",
      },
      {
        title: t("masterData.item.lastPrice"),
        dataIndex: "lastPrice",
        key: "lastPrice",
      },
      {
        title: t("masterData.item.lastSalePrice"),
        dataIndex: "lastSalePrice",
        key: "lastSalePrice",
      },
      {
        title: t("common.status"),
        key: "status",
        dataIndex: "status",
        render: (_, { status }) => {
          let color = status === "active" ? "green" : "volcano";
          return (
            <Tag color={color} key={status}>
              {t(`common.${status}`).toUpperCase()}
            </Tag>
          );
        },
      },
      {
        title: t("common.actions"),
        key: "action",
        align: "center",
        render: (_, record) => (
          <Space size="middle" justify="center" content="center">
            <ButtonBase onClick={() => handleEdit(record)}>
              <EditOutlined />
            </ButtonBase>
            <ButtonBase onClick={() => handleDelete(record)}>
              <DeleteOutlined />
            </ButtonBase>
          </Space>
        ),
        fixed: "right",
        width: 150,
      },
    ];

    // Dữ liệu mẫu
    const data = [
      {
        key: "1",
        name: "Laptop Dell XPS 15",
        code: "LAPTOP001",
        category: "Electronics",
        price: 25000000,
        stock: 15,
        status: "active",
      },
      {
        key: "2",
        name: "iPhone 15 Pro Max",
        code: "PHONE001",
        category: "Electronics",
        price: 35000000,
        stock: 8,
        status: "active",
      },
      {
        key: "3",
        name: "Samsung Galaxy S24",
        code: "PHONE002",
        category: "Electronics",
        price: 22000000,
        stock: 0,
        status: "inactive",
      },
      {
        key: "4",
        name: "MacBook Pro M3",
        code: "LAPTOP002",
        category: "Electronics",
        price: 45000000,
        stock: 5,
        status: "active",
      },
      {
        key: "5",
        name: "iPad Air",
        code: "TABLET001",
        category: "Electronics",
        price: 18000000,
        stock: 12,
        status: "active",
      },
    ];

    const handleEdit = (record) => {
      console.log("Edit:", record);
      setEditingRecord(record);
      setIsEditModalOpen(true);
    };

    const handleDelete = (record) => {
      Modal.confirm({
        title: t("messages.confirm.delete"),
        content: `${t("common.delete")} "${record.name}"?`,
        okText: t("common.ok"),
        cancelText: t("common.cancel"),
        onOk: () => {
          console.log("Delete:", record);
          message.success(t("messages.success.delete"));
        },
      });
    };

    return (
      <div
        style={{
          height: "100%", // ← FIT PARENT (TabPane)
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <SoftTable
          columns={columns}
          dataSource={data}
          size="small"
          scroll={{
            x: "max-content",
            y: "calc(100vh - 240px)", // ← Tạm thời dùng viewport, sẽ optimize sau
          }}
          pagination={{
            style: {
              margin: "0",
            },
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `${t("pagination.total")}: ${total} ${t("pagination.items")}`,
          }}
        />
      </div>
    );
  };

  const WarehouseTab = () => {
    return (
      <div
        style={{
          padding: 8,
          backgroundColor: "#34cbd0ff",
          height: "100%",
          overflow: "hidden",
          margin: 8,
        }}
      >
        Check layout
      </div>
    );
  };

  const HistoryTab = () => {
    return <div style={{ padding: 20 }}>Đây là lịch sử nhập (Component Log)...</div>;
  };

  const tabItems = [
    { key: "1", label: t("masterData.itemList.title"), children: <ItemListTab /> },
    { key: "2", label: t("masterData.warehouse.title"), children: <WarehouseTab /> },
    { key: "3", label: t("masterData.history.title"), children: <HistoryTab /> },
  ];

  const MyPage = () => {
    const tabItems = [
      {
        key: "1",
        label: t("masterData.item.title"),
        children: ItemListTab(),
      },
      {
        key: "2",
        label: t("masterData.warehouse.title"),
        children: WarehouseTab(),
      },
      {
        key: "3",
        label: t("masterData.history.title"),
        children: HistoryTab(),
      },
    ];

    // Tạo action buttons dựa vào activeTab
    const getActionButtons = () => {
      if (activeTab === "3") return [];

      return [
        {
          label: t("common.add"),
          onClick: handleCreate,
          variant: "gradient",
          color: "info",
          icon: "add",
        },
      ];
    };

    // Lấy title và subtitle dựa vào activeTab
    const getHeaderInfo = () => {
      switch (activeTab) {
        case "1":
          return {
            title: t("masterData.item.title"),
            subtitle: t("masterData.item.subtitle"),
            icon: "list",
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

    const headerInfo = getHeaderInfo();

    return (
      <BaseLayout headerInfo={headerInfo} actionButtons={getActionButtons()}>
        <Tabs
          className="custom-tabs-container"
          tabPlacement={"end"}
          activeKey={activeTab}
          items={tabItems}
          onChange={(key) => setActiveTab(key)}
          style={tabsContainerStyles}
          // tabBarStyle={tabBarStyles}
        />

        {/* Create Modals */}
        {activeTab === "1" && (
          <ItemModal
            open={isModalOpen}
            mode="create"
            form={form}
            confirmLoading={false}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}

        {activeTab === "2" && (
          <WarehouseModal
            open={isModalOpen}
            mode="create"
            form={form}
            confirmLoading={false}
            onOk={handleOk}
            onCancel={handleCancel}
          />
        )}

        {/* Edit Modals */}
        {activeTab === "1" && (
          <ItemModal
            open={isEditModalOpen}
            mode="edit"
            form={form}
            editingRecord={editingRecord}
            confirmLoading={confirmLoading}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
            onFieldChange={handleFieldChange}
          />
        )}

        {activeTab === "2" && (
          <WarehouseModal
            open={isEditModalOpen}
            mode="edit"
            form={form}
            editingRecord={editingRecord}
            confirmLoading={confirmLoading}
            onOk={handleEditOk}
            onCancel={handleEditCancel}
            onFieldChange={handleFieldChange}
          />
        )}
      </BaseLayout>
    );
  };

  return <MyPage />;
}

export default VRInfo;
