import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import { forwardRef } from "react";
import { Box, BoxProps } from "@mui/material";
// ----------------------------------------------------------------------

export interface SvgColorProps extends BoxProps {
  src: string;
}

const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      ...sx,
    }}
    {...other}
  />
));

SvgColor.displayName = "SvgColor";

const ICONS = {
  dashboard: <DashboardOutlinedIcon />,
  project_settings: <DisplaySettingsOutlinedIcon />,
};

const items = [
  {title: "Home", path: `/home`, icon: ICONS.dashboard, urlObjects: false},
  {
    title: "TFL Experimentation",
    path: "#",
    icon: ICONS.project_settings,
    children: [
      {title: "Lines", path: "/TFL/Lines", urlObjects: false},
    ],
  },
];

const sidebarConfig = [
  {
    subheader: "Contents",
    items: items,
  },
];

export default sidebarConfig;
