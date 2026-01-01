/**
=========================================================
* Soft UI Dashboard React - SoftTable Styles
=========================================================
*/

import { blue } from "@mui/material/colors";

function softTableContainer(theme) {
  const { palette, functions, borders, boxShadows } = theme;
  const { white, dark, grey, gradients } = palette;
  const { pxToRem, linearGradient } = functions;
  const { borderRadius } = borders;
  const { md } = boxShadows;

  return {
    overflow: "hidden",
    height: "100%",
    width: "100%",
    margin: 1,
    boxShadow: md,
    backgroundColor: white.main,

    // Basic header
    "& .ant-table-thead > tr > th": {
      background: grey[1000],
      color: dark.main,
      border: `1px solid ${grey[300]}`,
      fontWeight: 600,
      fontSize: pxToRem(10.5),
      padding: `${pxToRem(8)} ${pxToRem(10.5)}`,
      borderBottom: "none",
    },

    // Table fixed header styles
    "& .ant-table-thead > tr > th.ant-table-cell-fix-left, & .ant-table-thead > tr > th.ant-table-cell-fix-right":
      {
        position: "sticky !important",
        zIndex: "20 !important",
        backgroundColor: `${white.main} !important`,
      },

    // Table normal body styles
    "& .ant-table-tbody > tr > td": {
      padding: `${pxToRem(6)} ${pxToRem(10.5)}`,
      fontSize: pxToRem(10.5),
      color: dark.main,
      borderBottom: `1px solid ${grey[200]}`,
      border: `1px solid ${grey[300]}`,
      backgroundColor: white.main,
    },
    // Table fixed body styles
    "& .ant-table-tbody > tr > td.ant-table-cell-fix-left, & .ant-table-tbody > tr > td.ant-table-cell-fix-right":
      {
        position: "sticky !important",
        zIndex: "20 !important",
        backgroundColor: `${white.main} !important`,
      },

    // Table hover effect
    "& .ant-table-tbody > tr:hover > td": {
      backgroundColor: blue[100],
    },

    // Table fixed hover effect
    "& .ant-table-tbody > tr:hover > td.ant-table-cell-fix-left, & .ant-table-tbody > tr:hover > td.ant-table-cell-fix-right":
      {
        backgroundColor: blue[100],
      },

    "& .ant-table-tbody > tr:hover > td.ant-table-cell-fix-left, & .ant-table-tbody > tr:hover > td.ant-table-cell-fix-right":
      {
        backgroundColor: blue[100],
      },

    // Pagination styles
    "& .ant-pagination": {
      textAlign: "right",
      margin: pxToRem(4),
      padding: pxToRem(4),
    },

    "& .ant-pagination-item": {
      padding: pxToRem(4),
      margin: pxToRem(4),
      borderRadius: pxToRem(4),
      border: `1px solid ${grey[300]}`,
    },

    "& .ant-pagination-item-active": {
      backgroundColor: gradients.info.main,
      borderColor: gradients.info.main,
      "& a": {
        color: white.main,
      },
    },

    // Empty state
    "& .ant-empty-description": {
      color: grey[500],
      fontSize: pxToRem(10.5),
    },

    // Loading state
    "& .ant-spin": {
      color: gradients.info.main,
    },
  };
}

// Styles for dark mode
function softTableContainerDark(theme) {
  const { palette, functions, borders, boxShadows } = theme;
  const { white, dark, grey, gradients, background } = palette;
  const { pxToRem, linearGradient } = functions;
  const { borderRadius } = borders;
  const { md } = boxShadows;

  return {
    // borderRadius: borderRadius.lg,
    overflow: "hidden",
    boxShadow: md,
    backgroundColor: background.card,

    "& .ant-table-thead > tr > th": {
      backgroundColor: linearGradient(gradients.dark.main, gradients.dark.state),
      color: white.main,
      fontWeight: 600,
      fontSize: pxToRem(14),
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: "none",
    },

    "& .ant-table-tbody > tr > td": {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      fontSize: pxToRem(14),
      color: white.main,
      backgroundColor: background.card,
      borderBottom: `1px solid ${grey[700]}`,
    },

    "& .ant-table-tbody > tr:hover > td": {
      backgroundColor: blue[100],
    },
  };
}

// Global styles for Ant Design Table
export const tableGlobalStyles = `
  /* Smooth transitions */
  .ant-table-tbody > tr {
    transition: all 0.5s ease;
  }

  /* Custom scrollbar */
  .ant-table-body::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .ant-table-body::-webkit-scrollbar-track {
    background: #c60000ff;
    border-radius: 4px;
  }

  .ant-table-body::-webkit-scrollbar-thumb {
    background: #600000ff;
    border-radius: 4px;
  }

  .ant-table-body::-webkit-scrollbar-thumb:hover {
    background: #600000ff;
  }

  /* Sticky header shadow */
  .ant-table-sticky-holder {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* Selection checkbox */
  .ant-table-selection-column {
    padding-left: 8px !important;
  }

  /* Expandable row icon */
  .ant-table-row-expand-icon {
    border-radius: 4px;
  }
`;

// Function to inject global table styles
export const injectTableStyles = () => {
  if (document.getElementById("soft-table-global-styles")) {
    return;
  }

  const styleElement = document.createElement("style");
  styleElement.id = "soft-table-global-styles";
  styleElement.innerHTML = tableGlobalStyles;
  document.head.appendChild(styleElement);
};

export { softTableContainer, softTableContainerDark };
