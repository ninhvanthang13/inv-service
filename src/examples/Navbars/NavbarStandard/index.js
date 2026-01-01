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

import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React examples
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Soft UI Dashboard React context
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

/**
 * NavbarStandard - Fixed top navbar with limited height, no margins
 * Always stays at the top of the screen
 */
function NavbarStandard({ brandName, routes, action }) {
  const [controller, dispatch] = useSoftUIController();
  const { darkMode, miniSidenav, layout } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  // Toggle sidebar
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  useEffect(() => {
    // A function that sets the display state for mobile navbar
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    window.addEventListener("resize", displayMobileNavbar);
    displayMobileNavbar();

    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={({ palette, functions: { rgba }, transitions }) => ({
        top: 0,
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
        height: "35px",
        minHeight: "35px", // Reduced from 64px
        maxHeight: "35px", // Reduced from 64px
        backgroundColor: darkMode ? palette.dark.main : rgba(palette.white.main, 0.95),
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1100,
        transition: transitions.create(["background-color", "box-shadow"], {
          duration: transitions.duration.standard,
        }),
      })}
    >
      <Toolbar
        sx={{
          height: "100%",
          minHeight: "35px !important", // Reduced from 64px
          maxHeight: "35px", // Reduced from 64px
          padding: "0 0px", // Reduced from 24px
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Sidebar Toggle Button (Desktop only, when dashboard layout) */}
        {layout === "dashboard" && (
          <IconButton
            size="small"
            color="inherit"
            onClick={handleMiniSidenav}
            sx={{
              display: { xs: "none", xl: "inline-flex" },
              color: darkMode ? "white" : "dark.main",
              marginRight: 2,
            }}
          >
            <Icon>{miniSidenav ? "menu_open" : "menu"}</Icon>
          </IconButton>
        )}

        {/* Brand/Logo */}
        <SoftBox
          component={Link}
          to="/"
          display="flex"
          alignItems="center"
          lineHeight={1}
          sx={{ textDecoration: "none" }}
        >
          <SoftTypography
            variant="button"
            fontWeight="bold"
            color={darkMode ? "white" : "dark"}
            fontSize="1.125rem"
          >
            {brandName || "Soft UI Dashboard"}
          </SoftTypography>
        </SoftBox>

        {/* Desktop Navigation Links */}
        <SoftBox color="inherit" display={{ xs: "none", lg: "flex" }} alignItems="center" gap={1}>
          {routes
            ?.filter((route) => route.type === "collapse" && !route.hidden)
            .map((route) => (
              <DefaultNavbarLink
                key={route.key}
                icon={route.icon?.type?.render?.().props?.children || "dashboard"}
                name={route.name}
                route={route.route}
                light={darkMode}
              />
            ))}
        </SoftBox>

        {/* Action Button */}
        {action && (
          <SoftBox display={{ xs: "none", lg: "inline-block" }}>
            {action.type === "internal" ? (
              <SoftButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color || "info"}
                size="small"
              >
                {action.label}
              </SoftButton>
            ) : (
              <SoftButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color || "info"}
                size="small"
              >
                {action.label}
              </SoftButton>
            )}
          </SoftBox>
        )}

        {/* Settings Button (Dashboard only) */}
        {layout === "dashboard" && (
          <IconButton
            size="small"
            color="inherit"
            onClick={() => setOpenConfigurator(dispatch, true)}
            sx={{
              display: { xs: "none", lg: "inline-flex" },
              color: darkMode ? "white" : "dark.main",
              marginLeft: 1,
            }}
          >
            <Icon>settings</Icon>
          </IconButton>
        )}

        {/* Mobile Menu Icon */}
        <IconButton
          size="small"
          color="inherit"
          sx={{
            display: { xs: "inline-flex", lg: "none" },
            color: darkMode ? "white" : "dark.main",
          }}
          onClick={openMobileNavbar}
        >
          <Icon>{mobileNavbar ? "close" : "menu"}</Icon>
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation */}
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </AppBar>
  );
}

// Setting default values for the props
NavbarStandard.defaultProps = {
  brandName: "Soft UI Dashboard",
  routes: [],
  action: false,
};

// Typechecking props
NavbarStandard.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default NavbarStandard;
