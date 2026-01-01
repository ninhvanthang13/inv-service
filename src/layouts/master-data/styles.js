/**
 * Custom Tabs Styles
 * Ensures tab bar is sticky and only tab content scrolls
 */

// Styles for the tabs container wrapper
export const tabsContainerStyles = {
  height: "100%", // ← FIT PARENT (thẻ cha BaseLayout content)
  width: "100%",

  display: "flex",
  flexDirection: "column",

  overflow: "hidden",

  position: "relative",
  background: "#dbb11aff", // White background
};

// Styles for Ant Design Tabs component
export const tabsStyles = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

// Styles for the tab bar (fixed at top)
export const tabBarStyles = {
  flexShrink: 0,
  // marginBottom: "16px",
};

// Global CSS injection for Ant Design Tabs
// This is needed because some Ant Design internal classes can't be styled via inline styles
export const tabsGlobalStyles = `
  /* 1. Ép container tab phải theo layout flex dọc */
  .custom-tabs-container {
    display: flex !important;
    flex-direction: column !important;
    height: 100% !important;
    overflow: hidden !important; /* Không cho scroll ở khung ngoài cùng */
  }

  /* 2. Thanh Tab Bar (Nav) không được co lại */
  .custom-tabs-container .ant-tabs-nav {
    flex-shrink: 0 !important;
    background: "#34cbd0ff", // White background
  }

  /* 3. Phần chứa nội dung Tab chiếm hết khoảng trống còn lại */
  .custom-tabs-container .ant-tabs-content-holder {
    height: 100%;
    flex: 1 !important;
    overflow: hidden !important; /* QUAN TRỌNG: Sửa auto thành hidden */
    background: "#34cbd0ff", // White background
  }

  .custom-tabs-container .ant-tabs-content {
    height: 100% !important;
    background: "#34cbd0ff", // White background
  }

  /* 4. Từng Tab con (TabPane) cũng phải full height và KHÔNG scroll */
  .custom-tabs-container .ant-tabs-tabpane {
    height: 100% !important;
    overflow: hidden !important; /* QUAN TRỌNG: Sửa auto thành hidden */
    display: flex;
    flex-direction: column;
    background: "#34cbd0ff", // White background
  }

  /* --- Xử lý cho Tab nằm dọc (Left/Right) --- */
  .custom-tabs-container.ant-tabs-left,
  .custom-tabs-container.ant-tabs-right {
    flex-direction: row !important;
    background: "#34cbd0ff", // White background
  }
  
  /* Khi tab nằm dọc, nav cũng ko được co */
  .custom-tabs-container.ant-tabs-left .ant-tabs-nav,
  .custom-tabs-container.ant-tabs-right .ant-tabs-nav {
    flex-shrink: 0 !important;
    height: 100%;
    background: "#34cbd0ff", // White background
  }
`;

// Function to inject global styles
export const injectTabsStyles = () => {
  // Check if styles already injected
  if (document.getElementById("custom-tabs-styles")) {
    return;
  }

  const styleElement = document.createElement("style");
  styleElement.id = "custom-tabs-styles";
  styleElement.innerHTML = tabsGlobalStyles;
  document.head.appendChild(styleElement);
};

// Styles using theme (for integration with Soft UI Dashboard)
export const getTabsContainerStyles = (theme) => {
  const { palette, functions, borders } = theme || {};
  const { pxToRem } = functions || { pxToRem: (size) => `${size}px` };
  const { borderRadius } = borders || { borderRadius: { md: "0.5rem" } };

  return {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: "0.5rem",
    backgroundColor: "#d95808ff",
  };
};

export const getTabsStyles = (theme) => {
  return {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: "0.5rem",
    backgroundColor: "#d95808ff",
  };
};

export const getTabBarStyles = (theme) => {
  const { functions } = theme || {};
  const { pxToRem } = functions || { pxToRem: (size) => `${size}px` };

  return {
    flexShrink: 0,
    marginBottom: pxToRem(16),
    backgroundColor: "#d95808ff",
  };
};
