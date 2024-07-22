// src/components/Header.tsx
import React from 'react';
import Box from '@mui/material/Box';
import AppText from './common/AppText';
import { useThemeContext } from '../contexts/ThemeContext';
import { IconButton } from '@mui/material';
import { WbSunny as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.main"
      padding={5}
      position="relative"
    >
      <AppText fontWeight="large" fontSize="large" color="white">
        {text}
      </AppText>
      <IconButton
        onClick={toggleTheme}
        sx={{ position: 'absolute', right: 16 }}
        color="inherit"
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
};

export default Header;
