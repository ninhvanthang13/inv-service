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
import React from "react";
import Grid from "@mui/material/Grid";

// Billing page components
import {
  AlignmentExample,
  BasicGridExample,
  CardGridExample,
  CenteredLoginExample,
  DashboardLayoutExample,
  FormLayoutExample,
  HeaderSideMainLayoutExample,
  NestedGridExample,
  OffsetOrderExample,
  ResponsiveGridExample,
} from "components/SoftLayout/examples";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import PageHeader from "layouts/master-data/components/PageHeader";
import {
  Button,
  Card,
  Cascader,
  DatePicker,
  Descriptions,
  Form,
  Input,
  InputNumber,
  Mentions,
  Row,
  Segmented,
  Select,
  Statistic,
  Table,
  Tag,
  TreeSelect,
} from "antd";
import { createStyles } from "antd-style";
import { AddCircleOutlined, DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import CardGrid from "antd/es/card/CardGrid";

function PortTest() {
  const [sideWidth, setSideWidth] = React.useState(25); // Percentage
  const [isDragging, setIsDragging] = React.useState(false);
  const [showSidePanel, setShowSidePanel] = React.useState(false); // Control side panel visibility
  const containerRef = React.useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = React.useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

      // Limit between 15% and 50%
      if (newWidth >= 15 && newWidth <= 50) {
        setSideWidth(newWidth);
      }
    },
    [isDragging]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel);
  };

  const HeaderContent = () => {
    return (
      <>
        <PageHeader
          title="Title"
          subtitle="This is a subtitle"
          showBackButton={true}
          onBack={() => console.log("Back")}
          actionButtons={[
            {
              label: "Add",
              onClick: () => console.log("Add"),
              color: "blue",
              icon: "add",
            },
            {
              label: "Submit",
              onClick: () => console.log("Submit"),
              color: "blue",
              icon: "send",
            },
          ]}
          breadcrumbs={[
            { label: "Home", onClick: () => console.log("Home") },
            { label: "Purchase", onClick: () => console.log("Purchase") },
            { label: "New Request", active: true },
          ]}
          showFiltersToggle={true}
          showSearch={true}
          searchPlaceholder="Tìm kiếm theo tên, mã..."
          onSearch={(value) => console.log("Search:", value)}
          onFiltersToggle={toggleSidePanel}
          filtersOpen={showSidePanel}
        />
      </>
    );
  };

  const { RangePicker } = DatePicker;

  const SideContent = () => {
    const [form] = Form.useForm();
    const variant = Form.useWatch("variant", form);
    return (
      <Form
        form={form}
        variant={variant || "outlined"}
        style={{ width: "100%" }}
        initialValues={{ variant: "outlined" }}
        layout="vertical"
      >
        <Form.Item label="Input" name="Input">
          <Input />
        </Form.Item>

        <Form.Item label="InputNumber" name="InputNumber">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        {/* <Form.Item
        label="Mentions"
        name="Mentions"
        
      >
        <Mentions />
      </Form.Item> */}

        <Form.Item label="Select" name="Select">
          <Select />
        </Form.Item>

        {/* <Form.Item
        label="Cascader"
        name="Cascader"
        
      >
        <Cascader />
      </Form.Item> */}

        <Form.Item label="TreeSelect" name="TreeSelect">
          <TreeSelect />
        </Form.Item>
        {/* 
      <Form.Item
        label="DatePicker"
        name="DatePicker"
        
      >
        <DatePicker />
      </Form.Item> */}

        <Form.Item label="RangePicker" name="RangePicker">
          <RangePicker />
        </Form.Item>

        <Form.Item label="Input 2" name="Input2">
          <Input />
        </Form.Item>

        <Form.Item label="InputNumber 2" name="InputNumber2">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Select 2" name="Select2">
          <Select />
        </Form.Item>

        <Form.Item label="TreeSelect 2" name="TreeSelect2">
          <TreeSelect />
        </Form.Item>

        <Form.Item label="RangePicker 2" name="RangePicker2">
          <RangePicker />
        </Form.Item>

        <Form.Item label="Input 3" name="Input3">
          <Input />
        </Form.Item>

        <Form.Item label="InputNumber 3" name="InputNumber3">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label={null} layout="vertical">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };
  const useStyle = createStyles(({ css, token }) => {
    const { antCls } = token;
    return {
      customTable: css`
        ${antCls}-table {
          ${antCls}-table-container {
            ${antCls}-table-body,
            ${antCls}-table-content {
              scrollbar-width: thin;
              scrollbar-color: #eaeaea transparent;
            }
          }
        }
      `,
    };
  });
  const columns = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "start",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    { title: "Column 8", dataIndex: "address", key: "8", width: 150 },
    { title: "Column 9", dataIndex: "address", key: "9", width: 150 },
    { title: "Column 10", dataIndex: "address", key: "10", width: 150 },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => (
        <CardGrid
          justify="center"
          align="center"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}
        >
          <AddCircleOutlined onClick={() => console.log("Add")}></AddCircleOutlined>
          <EditOutlined onClick={() => console.log("Edit")}></EditOutlined>
          <DeleteOutlineOutlined onClick={() => console.log("Delete")}></DeleteOutlineOutlined>
        </CardGrid>
      ),
    },
  ];

  const dataSource = Array.from({ length: 100 }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  }));

  const Children = () => {
    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: "checkbox",
          selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
          onChange: (selectedRowKeys, selectedRows) => {
            console.log("Selected Row Keys:", selectedRowKeys);
            console.log("Selected Rows:", selectedRows);
          },
        }}
        scroll={{ x: "max-content", y: 55 * 5 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} items`,
          style: { margin: "8px" },
        }}
        size="small"
      />
    );
  };
  return (
    <>
      {/* <BasicGridExample /> */}
      {/* <ResponsiveGridExample /> */}
      <DashboardLayout>
        {/* <DashboardLayoutExample /> */}
        {/* <CardGridExample /> */}
        {/* <CenteredLoginExample /> */}
        {/* <OffsetOrderExample /> */}
        {/* <NestedGridExample /> */}
        <HeaderSideMainLayoutExample
          headerContent={HeaderContent()}
          sideContent={SideContent()}
          children={Children()}
          showSidePanel={showSidePanel}
        />
      </DashboardLayout>
      {/* <FormLayoutExample /> */}
      {/* <AlignmentExample /> */}
    </>
  );
}

export default PortTest;
