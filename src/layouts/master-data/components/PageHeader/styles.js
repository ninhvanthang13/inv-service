/**
=========================================================
* Custom Page Header Styles
=========================================================
*/

function pageHeaderContainer(theme, ownerState) {
  const { palette, functions, borders, breakpoints } = theme;
  const { backgroundColor } = ownerState;

  const { white, gradients, grey } = palette;
  const { linearGradient, pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${pxToRem(8)} ${pxToRem(8)}`, // Reduced from 16/24
    backgroundColor: backgroundColor === "transparent" ? "transparent" : backgroundColor,
    borderRadius: borderRadius.lg,
    marginBottom: pxToRem(1),
    flexWrap: "wrap",
    gap: pxToRem(8), // Reduced from 16

    [breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: `${pxToRem(4)} ${pxToRem(8)}`, // Reduced from 12/16
    },
  };
}

const pageHeaderTitle = {
  fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" }, // Reduced
  lineHeight: 1.2,
  // mb: 0.5,
};

const pageHeaderActions = {
  display: "flex",
  gap: 1.5,
  flexWrap: "wrap",
  alignItems: "center",
};

export { pageHeaderContainer, pageHeaderTitle, pageHeaderActions };
