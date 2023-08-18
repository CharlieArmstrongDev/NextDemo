import {Box, BoxProps} from "@mui/material";
import {HEADER, NAVBAR} from "../../styling/constants";

// ----------------------------------------------------------------------

export default function Main({children, sx, ...other}: BoxProps) {

  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        flexGrow: 1,
        pt: `${HEADER.DASHBOARD_DESKTOP_HEIGHT }px`,
        width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
