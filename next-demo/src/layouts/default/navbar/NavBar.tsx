import {Box, Drawer, useTheme} from "@mui/material";
import {NAVBAR} from "../../../styling/constants";
import Scrollbar from "../../../components/scrollbar";
import navConfig from "./config-navigation";
import NavSection from "./NavSection";
import { getPresets } from "@/styling/presets";

// ----------------------------------------------------------------------

export default function NavBar() {
  const theme = useTheme();

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <NavSection  data={navConfig} />

      <Box sx={{flexGrow: 1}} />

    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: {lg: 0},
        width: {lg: NAVBAR.DASHBOARD_WIDTH},
      }}
    >

      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            zIndex: 0,
            width: NAVBAR.DASHBOARD_WIDTH,
            bgcolor: theme.palette.background.default,
            borderRightStyle: `dashed`,
            borderColor: `${getPresets("blue").main}`,
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
