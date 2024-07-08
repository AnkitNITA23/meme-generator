import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MemeDisplay = ({ meme }) => {
  if (!meme) return null;

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Generated Meme"
        height="500"
        image={meme}
        title="Generated Meme"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Your generated meme
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MemeDisplay;
