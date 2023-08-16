import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {bgBlur} from "../../../styling/cssStyles";
import {HEADER, NAVBAR} from "../../../styling/constants";
import Iconify from "../../../components/iconify";
//import Logo from "../../../components/logo";
// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({onOpenNav}: Props) {
  const theme = useTheme();

  const renderContent = (
    <>
      <Typography variant="h4" color={"grey"}>CharlieArmstrongDev</Typography>
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
