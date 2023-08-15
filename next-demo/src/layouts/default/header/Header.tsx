import {AppBar, IconButton, Toolbar} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {bgBlur} from "../../../styling/cssStyles";
import {HEADER, NAVBAR} from "../../../styling/constants";
import Iconify from "../../../components/iconify";
//import Logo from "../../../components/logo";
// ----------------------------------------------------------------------

type Props = {

};

export default function Header({}: Props) {
  const theme = useTheme();

  const renderContent = (
    <>
      {/* <Logo sx={{mr: 2.5}} /> */}


        <IconButton sx={{mr: 1, color: "text.primary"}}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.MAIN_DESKTOP_HEIGHT,
        borderBottom: `solid 1px ${theme.palette.divider}`,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: {lg: 5},
        }}
      >
        {renderContent}
      </Toolbar>

    </AppBar>
  );
}
