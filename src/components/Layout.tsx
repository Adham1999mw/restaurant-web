// src/components/Layout.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="background.default">
      <Header text="Nearby Restaurants" />
      <Container>
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      </Container>

    </Box>
  );
};

export default Layout;
