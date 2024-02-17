import React from 'react';
import { Box } from '@chakra-ui/react';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="elevation.background"
      minHeight="100vh"
      padding="4"
      overflowX="clip"
    >
      {children}
    </Box>
  );
};
