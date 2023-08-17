import {useRouter} from "next/router";
import {Box, Drawer} from "@mui/material";
import {NAVBAR} from "../../../styling/constants";
import Scrollbar from "../../../components/scrollbar";
import navConfig from "./config-navigation";
import NavSection from "./NavSection";

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavBar({openNav, onCloseNav}: Props) {
  const {pathname} = useRouter();

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
      <NavSection sx={{pt: 9}} data={navConfig} />

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
            bgcolor: "transparent",
            borderRightStyle: `dashed`,
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
