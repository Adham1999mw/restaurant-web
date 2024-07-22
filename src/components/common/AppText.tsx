import React from 'react';
import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';

interface AppTextProps extends TypographyProps {
  fontWeight?: 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
}

const fontWeightMapping = {
  small: 300,
  medium: 500,
  large: 700,
};

const fontSizeMapping = {
  small: '0.8rem',
  medium: '1rem',
  large: '1.4rem',
};

const AppText: React.FC<AppTextProps> = ({
  fontWeight = 'medium',
  fontSize = 'medium',
  style,
  ...props
}) => {
  return (
    <Typography
      style={{
        fontWeight: fontWeightMapping[fontWeight],
        fontSize: fontSizeMapping[fontSize],
        ...style,
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default AppText;
