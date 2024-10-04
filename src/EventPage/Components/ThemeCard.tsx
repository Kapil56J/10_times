import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface ThemecardProps {
  text: string;
  isSelected: boolean;
  onThemeChange: () => void;
  theme: string;
};

const Themecard: React.FC<ThemecardProps> = ({ text, isSelected, theme, onThemeChange }) => {
  const handleThemeClick = () => {
    if (!isSelected) {
      onThemeChange();
    }
  };

  return (
    <Box
      onClick={handleThemeClick}
      sx={{
        cursor: 'pointer',
        border: isSelected ? '2px solid blue' : '1px solid black',
        borderRadius: '8px',
        marginTop: 2,
        padding: 1,
        width: '70px',
        height:'80px'
      }}
    >
      <Card sx={{width:'70px', height:'85px', background: theme}}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">
            Title
          </Typography>
          <Box
            sx={{
              width: '80%',
              height: '8px',
              backgroundColor: 'whitesmoke',
              borderRadius: '4px',
              marginY: 1,
            }}
          />
          <Box
            sx={{
              width: '30%',
              height: '8px',
              backgroundColor: 'whitesmoke',
              borderRadius: '4px',
              marginTop: 1,
            }}
          />
        </CardContent>
      </Card>
      <Typography variant="body2" fontWeight="bold" sx={{ marginX: 1, marginY: 2 }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Themecard;
