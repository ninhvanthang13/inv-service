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

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard React context
import { useSoftUIController, setMiniSidenav, setLayout, setTransparentSidenav } from "context";

// Soft UI Dashboard React routes
import routes from "routes";

// Custom styles for the BaseLayout
import {
  baseLayout,
  baseLayoutBackground,
  baseLayoutContent,
} from "layouts/master-data/components/BaseLayout/styles";

// Images
import brand from "assets/images/logo-ct.png";
import SoftButton from "components/SoftButton";
import PageHeader from "../PageHeader";
import { Height } from "@mui/icons-material";

function BaseLayout({ children, headerInfo, breadcrumbs, actionButtons }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the document layout to VR for the VR view
  useEffect(() => {
    setLayout(dispatch, "vr");
    setTransparentSidenav(dispatch, false);
  }, [pathname]);

  return (
    <SoftBox sx={baseLayout}>
      <SoftBox
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "transparent",
        }}
      >
        {/* <SoftBox ml={1} mr={1}>
          <DashboardNavbar onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} />
        </SoftBox> */}
        <PageHeader
          title={headerInfo.title}
          subtitle={headerInfo.subtitle}
          icon={headerInfo.icon}
          actionButtons={actionButtons}
          breadcrumbs={breadcrumbs}
        />
      </SoftBox>

      <SoftBox
        sx={{
          flex: 1,
          overflow: "hidden",
          padding: "0.5rem",
          backgroundColor: "#179f1aff",
        }}
      >
        {children}
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
