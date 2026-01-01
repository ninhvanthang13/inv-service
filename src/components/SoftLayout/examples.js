/**
 * SoftLayout Examples
 * Comprehensive examples of using SoftLayout with Ant Design Grid
 */

import React from "react";
import SoftLayout, { SoftLayoutItem } from "components/SoftLayout";
import { gutterPresets } from "components/SoftLayout/SoftLayoutRoot";
import SoftBox from "components/SoftBox";
import borders from "assets/theme/base/borders";
import pxToRem from "assets/theme/functions/pxToRem";

// ============================================
// Example 1: Basic Grid Layout
// ============================================
export const BasicGridExample = () => (
  <SoftLayout
    gutter={[16, 16]}
    variant="fullscreen"
    gutter={[16, 16]}
    style={{ minHeight: "100vh", alignItems: "stretch" }}
  >
    <SoftLayoutItem span={12}>
      <div style={{ background: "#ff0000ff", padding: "20px" }}>Column 1 (50%)</div>
    </SoftLayoutItem>
    <SoftLayoutItem span={12}>
      <div style={{ background: "#02e0adff", padding: "20px" }}>Column 2 (50%)</div>
    </SoftLayoutItem>
  </SoftLayout>
);

// ============================================
// Example 2: Responsive Grid
// ============================================
export const ResponsiveGridExample = () => (
  <SoftLayout gutter={[16, 16]}>
    <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: "#1890ff", padding: "20px", color: "white" }}>Card 1</div>
    </SoftLayoutItem>
    <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: "#52c41a", padding: "20px", color: "white" }}>Card 2</div>
    </SoftLayoutItem>
    <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: "#faad14", padding: "20px", color: "white" }}>Card 3</div>
    </SoftLayoutItem>
    <SoftLayoutItem xs={24} sm={12} md={8} lg={6}>
      <div style={{ background: "#f5222d", padding: "20px", color: "white" }}>Card 4</div>
    </SoftLayoutItem>
  </SoftLayout>
);

// ============================================
// Example 3: Dashboard Layout
// ============================================
export const DashboardLayoutExample = () => (
  <SoftLayout variant="fullscreen" gutter={0}>
    {/* Sidebar */}
    <SoftLayoutItem xs={0} lg={4}>
      <div style={{ background: "#000407ff", height: "100vh", color: "white", padding: "20px" }}>
        Sidebar
      </div>
    </SoftLayoutItem>

    {/* Main Content */}
    <SoftLayoutItem xs={24} lg={20}>
      <SoftLayout gutter={[16, 16]} style={{ padding: "16px" }}>
        {/* Header */}
        <SoftLayoutItem span={24}>
          <div
            style={{ background: "#fff", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          >
            Header
          </div>
        </SoftLayoutItem>

        {/* Content */}
        <SoftLayoutItem span={24}>
          <div style={{ background: "#fff", padding: "20px", minHeight: "400px" }}>
            Main Content
          </div>
        </SoftLayoutItem>
      </SoftLayout>
    </SoftLayoutItem>
  </SoftLayout>
);

// ============================================
// Example 4: Centered Login Form
// ============================================
export const CenteredLoginExample = () => (
  <SoftLayout variant="fullscreen" justify="center" align="middle" bgColor="grey-100">
    <SoftLayoutItem xs={22} sm={16} md={12} lg={8}>
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Login</h2>
        <p>Login form content here...</p>
      </div>
    </SoftLayoutItem>
  </SoftLayout>
);

// ============================================
// Example 5: Card Grid with Gutter Presets
// ============================================
export const CardGridExample = () => {
  const cards = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
  }));

  return (
    <SoftLayout gutter={gutterPresets.lg}>
      {cards.map((card) => (
        <SoftLayoutItem key={card.id} xs={24} sm={12} md={8} lg={6}>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{card.title}</h3>
            <p>Card content...</p>
          </div>
        </SoftLayoutItem>
      ))}
    </SoftLayout>
  );
};

// ============================================
// Example 6: Offset and Order
// ============================================
export const OffsetOrderExample = () => (
  <SoftLayout gutter={[16, 16]}>
    {/* Centered with offset */}
    <SoftLayoutItem span={12} offset={6}>
      <div style={{ background: "#1890ff", padding: "20px", color: "white" }}>
        Centered (offset: 6)
      </div>
    </SoftLayoutItem>

    {/* Reversed order */}
    <SoftLayoutItem span={12} order={2}>
      <div style={{ background: "#52c41a", padding: "20px", color: "white" }}>First (order: 2)</div>
    </SoftLayoutItem>
    <SoftLayoutItem span={12} order={1}>
      <div style={{ background: "#faad14", padding: "20px", color: "white" }}>
        Second (order: 1)
      </div>
    </SoftLayoutItem>
  </SoftLayout>
);

// ============================================
// Example 7: Nested Grids - Header + Side + Main Layout (Resizable)
// ============================================
export const NestedGridExample = () => {
  const [sideWidth, setSideWidth] = React.useState(25); // Percentage
  const [isDragging, setIsDragging] = React.useState(false);
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

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <SoftBox
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 1, // Reduced from 2 (16px to 8px)
      }}
    >
      {/* Header */}
      <SoftBox
        sx={{
          flexShrink: 0,
          background: "#001529",
          p: 2.5,
          color: "white",
          mb: 2,
          borderRadius: 1,
        }}
      >
        <h2 style={{ margin: 0 }}>Header (Resizable Panels Below)</h2>
      </SoftBox>

      {/* Content Area */}
      <SoftBox
        sx={{
          flex: 1,
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        <SoftBox
          ref={containerRef}
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            gap: 2,
          }}
        >
          {/* Side Content */}
          <SoftBox
            sx={{
              width: `${sideWidth}%`,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SoftBox
              sx={{
                p: 2.5,
                color: "white",
                flex: 1,
                backgroundColor: "#1890ff",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Side Content ({sideWidth.toFixed(1)}%)</h3>
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                <li>Menu Item 4</li>
              </ul>
              <p style={{ fontSize: "12px", opacity: 0.8 }}>← Drag the handle to resize →</p>
            </SoftBox>
          </SoftBox>

          {/* Resize Handle */}
          <SoftBox
            onMouseDown={handleMouseDown}
            sx={{
              width: "8px",
              cursor: "col-resize",
              backgroundColor: isDragging ? "#1890ff" : "#d9d9d9",
              borderRadius: 0.5,
              transition: "background-color 0.2s",
              position: "relative",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              if (!isDragging) e.currentTarget.style.backgroundColor = "#bfbfbf";
            }}
            onMouseLeave={(e) => {
              if (!isDragging) e.currentTarget.style.backgroundColor = "#d9d9d9";
            }}
          >
            {/* Visual indicator */}
            <SoftBox
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "2px",
                height: "40px",
                backgroundColor: "white",
                borderRadius: 0.125,
              }}
            />
          </SoftBox>

          {/* Main Content */}
          <SoftBox
            sx={{
              flex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SoftBox
              sx={{
                p: 0.625,
                color: "white",
                flex: 1,
                backgroundColor: "#52c41a",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Main Content ({(100 - sideWidth).toFixed(1)}%)</h3>
              <p>This is the main content area where your primary content goes.</p>
              <p>It takes up most of the space and is responsive.</p>
              <p style={{ fontSize: "12px", opacity: 0.8 }}>
                The panels are resizable! Drag the handle between them.
              </p>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
};

// ============================================
// Example 8: Form Layout
// ============================================
export const FormLayoutExample = () => (
  <SoftLayout gutter={[16, 16]} style={{ maxWidth: "800px", margin: "0 auto" }}>
    <SoftLayoutItem span={24}>
      <h2>User Registration</h2>
    </SoftLayoutItem>

    <SoftLayoutItem xs={24} sm={12}>
      <label>First Name</label>
      <input type="text" style={{ width: "100%", padding: "8px" }} />
    </SoftLayoutItem>

    <SoftLayoutItem xs={24} sm={12}>
      <label>Last Name</label>
      <input type="text" style={{ width: "100%", padding: "8px" }} />
    </SoftLayoutItem>

    <SoftLayoutItem span={24}>
      <label>Email</label>
      <input type="email" style={{ width: "100%", padding: "8px" }} />
    </SoftLayoutItem>

    <SoftLayoutItem span={24}>
      <label>Password</label>
      <input type="password" style={{ width: "100%", padding: "8px" }} />
    </SoftLayoutItem>

    <SoftLayoutItem span={24}>
      <button
        style={{ padding: "10px 20px", background: "#1890ff", color: "white", border: "none" }}
      >
        Submit
      </button>
    </SoftLayoutItem>
  </SoftLayout>
);

// ============================================
// Example 9: Three Column Layout
// ============================================
export const ThreeColumnExample = () => (
  <SoftLayout variant="fullscreen" gutter={0}>
    <SoftLayoutItem xs={24} md={6}>
      <div style={{ background: "#f0f0f0", height: "100vh", padding: "20px" }}>Left Sidebar</div>
    </SoftLayoutItem>

    <SoftLayoutItem xs={24} md={12}>
      <div style={{ background: "#fff", height: "100vh", padding: "20px" }}>Main Content</div>
    </SoftLayoutItem>

    <SoftLayoutItem xs={24} md={6}>
      <div style={{ background: "#f0f0f0", height: "100vh", padding: "20px" }}>Right Sidebar</div>
    </SoftLayoutItem>
  </SoftLayout>
);

// ============================================
// Example 10: Alignment Showcase
// ============================================
export const AlignmentExample = () => (
  <div>
    {/* Horizontal Alignment */}
    <h3>Justify: start</h3>
    <SoftLayout justify="start" gutter={[8, 8]} style={{ background: "#f0f0f0", padding: "10px" }}>
      <SoftLayoutItem span={4}>
        <div style={{ background: "#1890ff", padding: "10px", color: "white" }}>1</div>
      </SoftLayoutItem>
      <SoftLayoutItem span={4}>
        <div style={{ background: "#52c41a", padding: "10px", color: "white" }}>2</div>
      </SoftLayoutItem>
    </SoftLayout>

    <h3>Justify: center</h3>
    <SoftLayout justify="center" gutter={[8, 8]} style={{ background: "#f0f0f0", padding: "10px" }}>
      <SoftLayoutItem span={4}>
        <div style={{ background: "#1890ff", padding: "10px", color: "white" }}>1</div>
      </SoftLayoutItem>
      <SoftLayoutItem span={4}>
        <div style={{ background: "#52c41a", padding: "10px", color: "white" }}>2</div>
      </SoftLayoutItem>
    </SoftLayout>

    <h3>Justify: space-between</h3>
    <SoftLayout
      justify="space-between"
      gutter={[8, 8]}
      style={{ background: "#f0f0f0", padding: "10px" }}
    >
      <SoftLayoutItem span={4}>
        <div style={{ background: "#1890ff", padding: "10px", color: "white" }}>1</div>
      </SoftLayoutItem>
      <SoftLayoutItem span={4}>
        <div style={{ background: "#52c41a", padding: "10px", color: "white" }}>2</div>
      </SoftLayoutItem>
    </SoftLayout>

    {/* Vertical Alignment */}
    <h3>Align: middle</h3>
    <SoftLayout
      align="middle"
      gutter={[8, 8]}
      style={{ background: "#f0f0f0", padding: "10px", height: "200px" }}
    >
      <SoftLayoutItem span={12}>
        <div style={{ background: "#1890ff", padding: "10px", color: "white" }}>
          Vertically Centered
        </div>
      </SoftLayoutItem>
    </SoftLayout>
  </div>
);

// ============================================
// Example 11: Header + Side + Main with SoftLayout (Resizable)
// ============================================
export const HeaderSideMainLayoutExample = ({
  headerContent,
  sideContent,
  children,
  showSidePanel = true,
}) => {
  const [sideWidth, setSideWidth] = React.useState(25); // Percentage
  const [isDragging, setIsDragging] = React.useState(false);
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

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <SoftBox
      sx={{
        height: "100%",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        p: 1,
        overflow: "hidden",
      }}
    >
      {/* Header using SoftLayout */}
      <SoftLayout gutter={[0, 0]} style={{ marginBottom: "8px" }}>
        <SoftLayoutItem span={24}>
          <SoftBox
            sx={{
              background: "#ffffffff",
              p: 1,
              color: "black",
              borderRadius: 0.75,
              borderColor: "#0000ffff",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          >
            {headerContent}
          </SoftBox>
        </SoftLayoutItem>
      </SoftLayout>

      {/* Content Area */}
      <SoftBox
        sx={{
          flex: 1,
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        <SoftBox
          ref={containerRef}
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            minWidth: 0,
            gap: 2,
          }}
        >
          {/* Side Content using SoftLayout - Conditionally rendered */}
          {showSidePanel && (
            <>
              <SoftBox
                sx={{
                  width: `${sideWidth}%`,
                  minHeight: 0,
                  minWidth: 0,
                }}
              >
                <SoftLayout
                  gutter={[0, 0]}
                  style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}
                >
                  <SoftLayoutItem span={24} style={{ display: "flex", flex: 1, minHeight: 0 }}>
                    <SoftBox
                      sx={{
                        p: 2,
                        color: "black",
                        flex: 1,
                        minHeight: 0,
                        maxHeight: "100%",
                        backgroundColor: "#ffffffff",
                        borderColor: "#0000ffff",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderRadius: 0.75,
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",
                        overflowX: "hidden",
                      }}
                    >
                      {sideContent}
                    </SoftBox>
                  </SoftLayoutItem>
                </SoftLayout>
              </SoftBox>

              {/* Resize Handle */}
              <SoftBox
                onMouseDown={handleMouseDown}
                sx={{
                  width: "3px",
                  cursor: "col-resize",
                  backgroundColor: isDragging ? "#ffffffff" : "#0000ffff",
                  borderColor: "#0000ffff",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderRadius: 0.5,
                  transition: "background-color 0.2s",
                  position: "relative",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isDragging) e.currentTarget.style.backgroundColor = "#bfbfbf";
                }}
                onMouseLeave={(e) => {
                  if (!isDragging) e.currentTarget.style.backgroundColor = "#0000ffff";
                }}
              >
                {/* Visual indicator */}
                <SoftBox
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "2px",
                    height: "40px",
                    backgroundColor: "white",
                    borderRadius: 0.125,
                  }}
                />
              </SoftBox>
            </>
          )}

          {/* Main Content using SoftLayout */}
          <SoftBox
            sx={{
              flex: 1,
              minHeight: 0,
              minWidth: 0,
            }}
          >
            <SoftLayout
              gutter={[0, 0]}
              style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}
            >
              <SoftLayoutItem span={24} style={{ display: "flex", flex: 1, minHeight: 0 }}>
                <SoftBox
                  sx={{
                    color: "black",
                    flex: 1,
                    minHeight: 0,
                    maxHeight: "100%",
                    borderColor: "#0000ffff",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: 0.75,
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "hidden",
                    overflowX: "hidden",
                  }}
                >
                  {children}
                </SoftBox>
              </SoftLayoutItem>
            </SoftLayout>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
};
