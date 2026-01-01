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

// Images
import vrBg from "assets/images/vr-bg.jpg";

function baseLayout({ functions, breakpoints }) {
  const { pxToRem } = functions;

  return {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#884d4dff",
    margin: "1rem",

    [breakpoints.down("lg")]: {
      "& .MuiDrawer-paper.makeStyles-sidenav_close-9": {
        transform: `translateX(${pxToRem(-640)})`,
      },
      "& .MuiDrawer-paper.makeStyles-sidenav_open-8": {
        transform: `translateX(${pxToRem(-280)})`,
      },
    },

    [breakpoints.down("md")]: {
      overflow: "auto",

      "& .MuiDrawer-paper.makeStyles-sidenav_close-9": {
        transform: `translateX(${pxToRem(-320)})`,
      },
      "& .MuiDrawer-paper.makeStyles-sidenav_open-8": {
        transform: `translateX(${pxToRem(0)})`,
      },
    },

    [breakpoints.down("sm")]: {
      height: "auto",
    },
  };
}

const baseLayoutBackground = ({ borders: { borderRadius }, breakpoints }) => ({
  width: "calc(100% - 2rem)",
  height: "calc(100% - 2rem)",
  backgroundImage: `url(${vrBg})`,
  backgroundSize: "cover",
  borderRadius: borderRadius.xl,
  position: "relative",
  overflow: "hidden",
  my: 1,
  mx: 1,

  [breakpoints.down("sm")]: {
    overflow: "hidden",
  },
});

const baseLayoutContent = ({ breakpoints }) => ({
  position: "relative",
  height: "calc(100vh - 2rem)",
  overflow: "hidden",
  color: "black",
  borderRadius: "1rem",

  [breakpoints.down("sm")]: {
    position: "static",
    transform: "none",
    width: "100%",
    height: "auto",
    borderRadius: "1rem",
  },
});

const classNamesObject = {
  root: "demo-space-root",
  item: "demo-space-item",
  separator: "demo-space-separator",
};
const classNamesFn = (info) => {
  if (info.props.orientation === "vertical") {
    return {
      root: "demo-space-root--vertical",
    };
  } else {
    return {
      root: "demo-space-root--horizontal",
    };
  }
};
const stylesObject = {
  root: { borderWidth: 2, borderStyle: "dashed", padding: 8, marginBottom: 1 },
  item: { backgroundColor: "#f0f0f0", padding: 4 },
  separator: { color: "red", fontWeight: "normal" },
};
const stylesFn = (info) => {
  if (info.props.size === "large") {
    return {
      root: {
        backgroundColor: "#e6f7ff",
        borderColor: "#1890ff",
        padding: 8,
      },
    };
  } else {
    return {
      root: {
        backgroundColor: "#fff7e6",
        borderColor: "#fa8c16",
      },
    };
  }
};

export {
  baseLayout,
  baseLayoutBackground,
  baseLayoutContent,
  classNamesObject,
  classNamesFn,
  stylesObject,
  stylesFn,
};
