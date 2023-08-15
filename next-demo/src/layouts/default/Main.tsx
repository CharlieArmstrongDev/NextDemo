import {Box, BoxProps} from "@mui/material";
import {HEADER, NAVBAR} from "../../styling/constants";

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({children, sx, ...other}: BoxProps) {

  return (
    <Box
      component="main"
      sx={{
        height: "100%",
        flexGrow: 1,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
