import { Theme } from '@mui/material/styles';
import DataGrid from './DataGrid';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    DataGrid(theme),
  );
}
