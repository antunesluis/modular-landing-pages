'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/global-styles';
import { theme } from '@/styles/theme';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
