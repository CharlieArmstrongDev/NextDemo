import { List, ListSubheader, Stack, StackProps, styled } from '@mui/material';
import NavList, { NavListProps } from './NavList';

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  fontSize: 11,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export interface NavSectionProps extends StackProps {
  data: {
    subheader: string;
    items: NavListProps[];
  }[];
  isCollapse?: boolean;
}

export default function NavSection({ data, isCollapse = false, sx, ...other }: NavSectionProps) {

  return (
    <Stack sx={sx} {...other}>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <List key={key} disablePadding sx={{ px: 2 }}>
            {group.subheader && (
              <StyledSubheader disableSticky sx={{
                ...(isCollapse && {
                  opacity: 0,
                }),
              }}>
                {group.subheader}
              </StyledSubheader>
            )}

            {group.items.map((list) => (
              <NavList
                key={list.title + list.path}
                data={list}
                depth={1}
                hasChild={!!list.children}
                isCollapse={isCollapse}
              />
            ))}
          </List>
        );
      })}
    </Stack>
  );
}
