import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import {
  createThemeObject,
  Themes,
  GlobalStyles,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
} from '../theme';
import { ReactNode, FC } from 'react';
import { useTheme } from 'nextra-theme-docs';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider attribute="class" disableTransitionOnChange>
      <StyledThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </StyledThemeProvider>
    </NextThemeProvider>
  );
}

const StyledThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <ThemeProvider
      theme={createThemeObject({
        style: (resolvedTheme as Themes) || Themes.light,
        primaryColor: PRIMARY_COLOR,
        primaryTextColor: PRIMARY_TEXT_COLOR,
      })}
    >
      {children}
    </ThemeProvider>
  );
};
