import merge from 'lodash/merge';
import { useMemo } from 'react';
import { alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { getPresets } from './presets';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeColorPresets({ children }: Props) {
  const outerTheme = useTheme();

  const presetsColor = getPresets('blue')

  const themeOptions = useMemo(
    () => ({
      palette: {
        primary: presetsColor,
        background: {
          default: outerTheme.palette.grey[900],
        },
      },
      customShadows: {
        primary: `0 8px 16px 0 ${alpha(presetsColor.main, 0.24)}`,
      },
    }),
    [presetsColor]
  );

  const theme = createTheme(merge
    (
      outerTheme, 
      themeOptions
      )
  );

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}
