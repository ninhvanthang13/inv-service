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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Ant Design Grid
import { Row, Col } from "antd";

// Custom styles for SoftLayout
import { getSoftLayoutStyles } from "components/SoftLayout/SoftLayoutRoot";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

/**
 * SoftLayout - A flexible grid-based layout component with Ant Design Grid
 *
 * @param {Object} props - Component props
 * @param {string} props.variant - Layout variant: "fullscreen" | "contained" | "fluid"
 * @param {Object} props.gutter - Grid gutter [horizontal, vertical] or number
 * @param {string} props.justify - Horizontal alignment: "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly"
 * @param {string} props.align - Vertical alignment: "top" | "middle" | "bottom" | "stretch"
 * @param {boolean} props.wrap - Enable flex wrap
 * @param {string} props.bgColor - Background color from theme palette
 * @param {number} props.opacity - Opacity value (0-1)
 * @param {string} props.borderRadius - Border radius from theme
 * @param {string} props.shadow - Box shadow from theme
 * @param {string} props.overflow - Enable overflow: "visible" | "hidden" | "auto" | "scroll"
 * @param {React.ReactNode} props.children - Child components (can be Col or any component)
 */
const SoftLayout = forwardRef(
  (
    {
      variant,
      gutter,
      justify,
      align,
      wrap,
      bgColor,
      opacity,
      borderRadius,
      shadow,
      overflow,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const [controller] = useSoftUIController();

    // Get themed styles
    const layoutStyles = getSoftLayoutStyles({
      variant,
      bgColor,
      opacity,
      borderRadius,
      shadow,
      overflow,
      controller,
    });

    // Combine with custom styles
    const combinedStyles = {
      ...layoutStyles,
      ...style,
    };

    return (
      <Row
        ref={ref}
        gutter={gutter}
        justify={justify}
        align={align}
        wrap={wrap}
        style={combinedStyles}
        {...rest}
      >
        {children}
      </Row>
    );
  }
);

// Setting default values for the props of SoftLayout
SoftLayout.defaultProps = {
  variant: "fullscreen",
  gutter: [16, 16],
  justify: "start",
  align: "top",
  wrap: true,
  bgColor: "transparent",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  overflow: "hidden",
};

// Typechecking props for the SoftLayout
SoftLayout.propTypes = {
  variant: PropTypes.oneOf(["fullscreen", "contained", "fluid"]),
  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.object,
  ]),
  justify: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "space-around",
    "space-between",
    "space-evenly",
  ]),
  align: PropTypes.oneOf(["top", "middle", "bottom", "stretch"]),
  wrap: PropTypes.bool,
  bgColor: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  overflow: PropTypes.oneOf(["visible", "hidden", "auto", "scroll"]),
  children: PropTypes.node,
  style: PropTypes.object,
};

/**
 * SoftLayoutItem - Grid column wrapper (alias for Ant Design Col)
 * Use this to wrap content in grid columns
 */
export const SoftLayoutItem = Col;

export default SoftLayout;
