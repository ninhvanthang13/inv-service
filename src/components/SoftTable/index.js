/**
=========================================================
* Soft UI Dashboard React - Custom Table Component
=========================================================

* Reusable table component combining Ant Design Table with Soft UI theme
*/

import { forwardRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import SoftBox from "components/SoftBox";
import { useSoftUIController } from "context";
import { softTableContainer, softTableContainerDark, injectTableStyles } from "./SoftTableRoot";

const SoftTable = forwardRef(
  (
    {
      columns,
      dataSource,
      loading,
      pagination,
      rowSelection,
      onRow,
      onChange,
      scroll,
      size,
      bordered,
      showHeader,
      title,
      footer,
      expandable,
      rowKey,
      sticky,
      ...rest
    },
    ref
  ) => {
    const [controller] = useSoftUIController();
    const { darkMode } = controller;

    // Inject global table styles on mount
    useEffect(() => {
      injectTableStyles();
    }, []);

    // Default pagination config with translation support
    const defaultPagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} mục`,
      pageSize: 10,
      pageSizeOptions: ["10", "20", "50", "100"],
      ...pagination,
    };

    return (
      <SoftBox
        sx={(theme) => (darkMode ? softTableContainerDark(theme) : softTableContainer(theme))}
      >
        <Table
          ref={ref}
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          pagination={pagination === false ? false : defaultPagination}
          rowSelection={rowSelection}
          onRow={onRow}
          onChange={onChange}
          scroll={scroll}
          size={size}
          bordered={bordered}
          showHeader={showHeader}
          title={title}
          footer={footer}
          expandable={expandable}
          rowKey={rowKey}
          sticky={sticky}
          {...rest}
        />
      </SoftBox>
    );
  }
);

// Setting default values for the props
SoftTable.defaultProps = {
  loading: false,
  pagination: {},
  rowSelection: null,
  onRow: null,
  onChange: null,
  scroll: null,
  size: "middle",
  bordered: false,
  showHeader: true,
  title: null,
  footer: null,
  expandable: null,
  rowKey: "key",
  sticky: false,
};

// Typechecking props
SoftTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      dataIndex: PropTypes.string,
      key: PropTypes.string,
      render: PropTypes.func,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      fixed: PropTypes.oneOf(["left", "right"]),
      align: PropTypes.oneOf(["left", "center", "right"]),
      sorter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
      filters: PropTypes.array,
      onFilter: PropTypes.func,
    })
  ).isRequired,
  dataSource: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  rowSelection: PropTypes.object,
  onRow: PropTypes.func,
  onChange: PropTypes.func,
  scroll: PropTypes.object,
  size: PropTypes.oneOf(["small", "middle", "large"]),
  bordered: PropTypes.bool,
  showHeader: PropTypes.bool,
  title: PropTypes.func,
  footer: PropTypes.func,
  expandable: PropTypes.object,
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  sticky: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default SoftTable;
