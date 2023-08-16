import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Collapse, styled } from '@mui/material';
import NavItem from './NavItem';
import useActiveLink from '../../../../hooks/useActiveLink';

// ----------------------------------------------------------------------

export type NavListProps = {
  title: string;
  path: string;
  icon?: React.ReactElement;
  info?: React.ReactElement;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: any;
  urlObjects?: boolean;
};

type NavListRootProps = {
  data: NavListProps;
  depth: number;
  hasChild: boolean;
  isCollapse: boolean;
};


export default function NavList({ data, depth, hasChild, isCollapse }: NavListRootProps) {
  const { pathname } = useRouter();

  const { active, isExternalLink } = useActiveLink(data.path);

  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavItem
        item={data}
        isCollapse={isCollapse}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && !isCollapse && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.children} depth={depth} isCollapse={isCollapse}/>
        </Collapse>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type NavListSubProps = {
  data: NavListProps[];
  depth: number;
  isCollapse: boolean;
};

function NavSubList({ data, depth, isCollapse }: NavListSubProps) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
          isCollapse={isCollapse}
        />
      ))}
    </>
  );
}
