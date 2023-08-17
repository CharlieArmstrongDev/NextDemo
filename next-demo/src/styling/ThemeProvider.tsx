import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import palette from './palette';
import GlobalStyles from './globalStyles';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {

  const theme = createTheme({
    palette: palette('dark'),
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
