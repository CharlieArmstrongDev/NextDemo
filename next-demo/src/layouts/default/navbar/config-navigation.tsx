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
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

SvgColor.displayName = "SvgColor";

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{width: 1, height: 1}} />;

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
      {title: "Page 1", path: "/TFL/Page1", urlObjects: false},
    ],
  },
];

const sidebarConfig = [
  {
    subheader: "Project Commander",
    items: items,
  },
];

//export default navConfig;
export default sidebarConfig;
