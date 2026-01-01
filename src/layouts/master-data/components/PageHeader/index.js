/**
=========================================================
* Custom Page Header Component
=========================================================
*/

import PropTypes from "prop-types";
import { useState } from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";

// Custom styles for PageHeader
import { pageHeaderContainer, pageHeaderTitle, pageHeaderActions } from "../PageHeader/styles";
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

function PageHeader({
  title,
  subtitle,
  icon,
  actionButtons,
  breadcrumbs,
  backgroundColor,
  showBackButton,
  onBack,
  showFiltersToggle,
  showSearch,
  searchPlaceholder,
  onSearch,
  filtersContent,
  defaultFiltersOpen,
  onFiltersToggle,
  filtersOpen: controlledFiltersOpen,
}) {
  const [internalFiltersOpen, setInternalFiltersOpen] = useState(defaultFiltersOpen);
  const [searchValue, setSearchValue] = useState("");

  // Use controlled state if provided, otherwise use internal state
  const filtersOpen =
    controlledFiltersOpen !== undefined ? controlledFiltersOpen : internalFiltersOpen;

  const handleFiltersToggle = () => {
    if (onFiltersToggle) {
      // Controlled mode: call parent callback
      onFiltersToggle();
    } else {
      // Uncontrolled mode: use internal state
      setInternalFiltersOpen(!internalFiltersOpen);
    }
  };

  const handleSearch = (value) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <SoftBox>
      {/* Main Header Container */}
      <SoftBox
        sx={{
          display: "grid",
          gridTemplateColumns: "4fr 6fr", // 40% title, 60% actions+filters
          gap: 2,
          // px: 3,
          // py: 2,
          backgroundColor: backgroundColor || "white",
          // borderBottom: "1px solid",
          // borderColor: "grey.200",
        }}
      >
        {/* Left Column: Title Section (40%) */}
        <SoftBox display="flex" alignItems="center" gap={1}>
          {showBackButton && (
            <IconButton
              onClick={onBack}
              sx={{
                color: "text.main",
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <Icon>arrow_back</Icon>
            </IconButton>
          )}

          {icon && (
            <SoftBox
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="32px"
              height="32px"
              borderRadius="lg"
              sx={(theme) => ({
                background: theme.functions.linearGradient(
                  theme.palette.gradients.info.main,
                  theme.palette.gradients.info.state
                ),
                color: theme.palette.white.main,
              })}
            >
              <Icon fontSize="small">{icon}</Icon>
            </SoftBox>
          )}

          <SoftBox>
            <SoftTypography variant="h4" fontWeight="bold" sx={pageHeaderTitle}>
              {title}
            </SoftTypography>

            {subtitle && (
              <SoftTypography variant="button" color="text" fontWeight="regular">
                {subtitle}
              </SoftTypography>
            )}

            {breadcrumbs && (
              <SoftBox display="flex" alignItems="center" gap={1} mt={0.5}>
                {breadcrumbs.map((crumb, index) => (
                  <SoftBox key={index} display="flex" alignItems="center">
                    <SoftTypography
                      variant="caption"
                      color={crumb.active ? "info" : "text"}
                      fontWeight={crumb.active ? "medium" : "regular"}
                      sx={{
                        cursor: crumb.onClick ? "pointer" : "default",
                        "&:hover": crumb.onClick ? { color: "info.main" } : {},
                      }}
                      onClick={crumb.onClick}
                    >
                      {crumb.label}
                    </SoftTypography>
                    {index < breadcrumbs.length - 1 && (
                      <Icon sx={{ fontSize: "12px !important", mx: 0.5, color: "text.secondary" }}>
                        chevron_right
                      </Icon>
                    )}
                  </SoftBox>
                ))}
              </SoftBox>
            )}
          </SoftBox>
        </SoftBox>

        {/* Right Column: Actions + Filters (60%) */}
        <SoftBox
          sx={{
            display: "grid",
            gridTemplateRows: "1fr 1fr", // 50% actions, 50% filters
            gap: 1,
          }}
        >
          {/* Top Row: Action Buttons (50%) */}
          <SoftBox display="flex" justifyContent="flex-end" alignItems="center">
            {actionButtons && actionButtons.length > 0 && (
              <SoftBox sx={pageHeaderActions}>
                {actionButtons.map((button, index) => (
                  <Button
                    key={index}
                    color={button.color || "info"}
                    size={button.size || "small"}
                    onClick={button.onClick}
                    disabled={button.disabled}
                    icon={button.icon ? <Icon>{button.icon}</Icon> : null}
                  >
                    {button.label}
                  </Button>
                ))}
              </SoftBox>
            )}
          </SoftBox>

          {/* Bottom Row: Filters Toggle & Search (50%) */}
          {(showFiltersToggle || showSearch) && (
            <SoftBox display="flex" justifyContent="flex-end" alignItems="center" gap={0.5}>
              {showSearch && (
                <SoftBox sx={{ flex: 1, maxWidth: 200 }}>
                  <Input
                    placeholder={searchPlaceholder || "Tìm kiếm..."}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(searchValue);
                      }
                    }}
                    prefix={<Icon>search</Icon>}
                  />
                </SoftBox>
              )}
              {showFiltersToggle && (
                <Button
                  onClick={handleFiltersToggle}
                  icon={filtersOpen ? <StepForwardOutlined /> : <StepBackwardOutlined />}
                ></Button>
              )}
            </SoftBox>
          )}
        </SoftBox>
      </SoftBox>

      {/* Filters Panel (Collapsible) - Full Width */}
      {filtersOpen && filtersContent && (
        <SoftBox
          sx={{
            px: 3,
            py: 2,
            backgroundColor: "grey.100",
            // borderBottom: "1px solid",
            // borderColor: "grey.200",
          }}
        >
          {filtersContent}
        </SoftBox>
      )}
    </SoftBox>
  );
}

// Setting default values for the props
PageHeader.defaultProps = {
  subtitle: "",
  icon: null,
  actionButtons: [],
  breadcrumbs: null,
  backgroundColor: "white",
  showBackButton: false,
  onBack: null,
  showFiltersToggle: false,
  showSearch: false,
  searchPlaceholder: "Tìm kiếm...",
  onSearch: null,
  filtersContent: null,
  defaultFiltersOpen: false,
  onFiltersToggle: null,
  filtersOpen: undefined,
};

// Typechecking props
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  actionButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      variant: PropTypes.oneOf(["text", "contained", "gradient", "outlined"]),
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
      ]),
      size: PropTypes.oneOf(["small", "medium", "large"]),
      icon: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    })
  ),
  backgroundColor: PropTypes.string,
  showBackButton: PropTypes.bool,
  onBack: PropTypes.func,
  showFiltersToggle: PropTypes.bool,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  onSearch: PropTypes.func,
  filtersContent: PropTypes.node,
  defaultFiltersOpen: PropTypes.bool,
  onFiltersToggle: PropTypes.func,
  filtersOpen: PropTypes.bool,
};

export default PageHeader;
