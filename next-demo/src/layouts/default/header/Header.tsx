import {AppBar, Link, Toolbar, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {bgBlur} from "../../../styling/cssStyles";
import {HEADER, NAVBAR} from "../../../styling/constants";
import NextLink from "next/link";
import { getPresets } from "@/styling/presets";
// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({onOpenNav}: Props) {
  const theme = useTheme();

  const renderContent = (
    <>
      <Link component={NextLink} href="/home" sx={{display: "contents"}}>
        <Typography variant="h4" color={"grey"}>CharlieArmstrongDev</Typography>
      </Link>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.MAIN_DESKTOP_HEIGHT,
        borderColor: `${getPresets("blue").main}`,
        borderBottomStyle: `dashed`,
        borderWidth: 1,
        backgroundImage: `none`,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
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
