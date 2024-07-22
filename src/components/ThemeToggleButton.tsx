// src/components/ThemeToggleButton.tsx
import React from 'react';
import { Button } from '@mui/material';
import { useThemeContext } from '../contexts/ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <Button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ThemeToggleButton;
