import React from "react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
/**
 *
 * @param {number} param customSize - the circular progress size you want
 * @param {string} param primaryColor - primary color for the loader
 * @param {string} param secondColor - second color for the loader
 * @param {boolean} param suspense - if the loader for the lazy loading page not for component
 * @returns JSX Element
 */
const Loader = ({
  customSize = 40,
  primaryColor,
  secondaryColor,
  suspense,
}) => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      width: suspense && "100%",
      height: suspense && "100vh",
      alignItems: "center",
      justifyContent: "center",
    }}>
    <CircularProgress
      variant="determinate"
      sx={{
        color: primaryColor,
      }}
      size={customSize}
      thickness={4}
      value={100}
    />
    <CircularProgress
      disableShrink
      sx={{
        color: secondaryColor,
        animationDuration: "550ms",
        position: "absolute",

        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: "round",
        },
      }}
      size={customSize}
      thickness={4}
    />
  </Box>
);

export default Loader;
