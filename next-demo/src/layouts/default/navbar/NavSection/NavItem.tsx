import { Box, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText, Tooltip, alpha, styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavListProps } from './NavList';
import Iconify from '@/components/iconify';
import { ICON, NAVBAR } from '@/styling/constants';

// ----------------------------------------------------------------------

type StyledItemProps = Omit<NavItemProps, 'item'> & {
  caption?: boolean;
  disabled?: boolean;
};

export const StyledItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'caption',
})<StyledItemProps>(({ active, disabled, depth, caption, theme }) => {
  const isLight = theme.palette.mode === 'light';

  const subItem = depth !== 1;

  const activeStyle = {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    ...(!isLight && {
      color: theme.palette.primary.light,
    }),
  };

  const activeSubStyle = {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  };

  return {
    position: 'relative',
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(1.5),
    marginBottom: theme.spacing(0.25),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
    // Sub item
    ...(subItem && {
      height: NAVBAR.DASHBOARD_ITEM_SUB_HEIGHT,
      ...(depth > 2 && {
        paddingLeft: theme.spacing(depth),
      }),
      ...(caption && {
        height: NAVBAR.DASHBOARD_ITEM_SUB_HEIGHT,
      }),
    }),
    // Active item
    ...(active && {
      ...activeStyle,
      '&:hover': {
        ...activeStyle,
      },
    }),
    // Active sub item
    ...(subItem &&
      active && {
        ...activeSubStyle,
        '&:hover': {
          ...activeSubStyle,
        },
      }),
    // Disabled
    ...(disabled && {
      '&.Mui-disabled': {
        opacity: 0.64,
      },
    }),
  };
});

export const StyledIcon = styled(ListItemIcon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: ICON.NAVBAR_ITEM,
  height: ICON.NAVBAR_ITEM,
  '& svg': { width: '100%', height: '100%' },
});

type StyledDotIconProps = {
  active?: boolean;
};

export const StyledDotIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledDotIconProps>(({ active, theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: theme.palette.text.disabled,
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shorter,
  }),
  ...(active && {
    transform: 'scale(2)',
    backgroundColor: theme.palette.primary.main,
  }),
}));

export type INavItem = {
  item: NavListProps;
  depth: number;
  open?: boolean;
  active?: boolean;
  isExternalLink?: boolean;
  isCollapse?: boolean;
};

export type NavItemProps = INavItem & ListItemButtonProps;

export default function NavItem({
  item,
  depth,
  open,
  active,
  isExternalLink,
  isCollapse,
  ...other
}: NavItemProps) {
  const { title, path, icon, info, children, urlObjects, disabled, caption, roles} = item;
  const subItem = depth !== 1;

  const router = useRouter();
  const { project } = router.query;

  const renderContent = (
    <StyledItem depth={depth} active={active} disabled={disabled} caption={!!caption} {...other}>
      {icon && <StyledIcon>{icon}</StyledIcon>}

      {subItem && (
        <StyledIcon>
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )}

      <ListItemText
        primary={title}
        secondary={
          caption && (
            <Tooltip title={caption} placement="top-start">
              <span>{caption}</span>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          component: 'span',
          variant: active ? 'subtitle2' : 'body2',
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: 'caption',
        }}
      />

      {info && (
        <Box component="span" sx={{ lineHeight: 0 }}>
          {info}
        </Box>
      )}

     {/* main stick with current theme => dark and dark, light with light */}
      {!!children && (
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1, flexShrink: 0, }}
        />
      )}
    </StyledItem>
  );

  const renderItem = () => {
    if (urlObjects){
      return (
        <Link href={{pathname: path, query: { project: project}}} legacyBehavior>
          {renderContent}
        </Link>
      );
    }

    // ExternalLink
    if (isExternalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" >
          {renderContent}
        </Link>
      );

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link href={path} legacyBehavior>
        {renderContent}
      </Link>
    );
  };

  return renderItem();
}
