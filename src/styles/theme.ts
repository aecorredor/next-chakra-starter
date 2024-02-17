'use client';

import { extendTheme } from '@chakra-ui/react';

const fontFamily = `"Helvetica Neue LT", "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif`;

const blue = {
  50: '#e2f1ff',
  100: '#b8dcff',
  200: '#88c6ff',
  300: '#50afff',
  400: '#149dff',
  500: '#008cff',
  600: '#007dff',
  700: '#0a6cf1',
  800: '#1958de',
  900: '#2434bf',
} as const;

const yellow = {
  50: '#fffce8',
  100: '#fff7c7',
  200: '#fff2a2',
  300: '#ffed7e',
  400: '#ffe863',
  500: '#fee34a',
  600: '#fed449',
  700: '#fabd42',
  800: '#f6a63b',
  900: '#ef7f30',
} as const;

export const theme = extendTheme({
  colors: {
    yellow,
    blue,
    elevation: {
      background: '#e6ebf1',
      surface: '#eef3f9',
      surfaceHighlight: {
        50: '#178bfa',
        100: '#2d70be',
        200: '#1d62b0',
        300: '#165daf',
        400: '#0f55aa',
        500: '#0c509b',
      },
      onBackground: '#1374e5',
      onSurface: {
        primary: '#163866',
        secondary: '#e7ecf2',
      },
      onSurfaceHighlight: {
        primary: '#d6e9f8',
      },
      dropShadow: '#9eadc0',
    },
  },
  fonts: {
    mono: fontFamily,
    body: fontFamily,
    heading: fontFamily,
  },
  fontSizes: {
    xxs: '0.6rem',
  },
  breakpoints: {
    sm: '30em', // 480pxp
    md: '52em', // 832px
    lg: '64em', // 1024px
    xl: '80em', // 1280px
  },
});
