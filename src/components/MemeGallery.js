import React from 'react';
import { Grid } from '@mui/material';
import MemeDisplay from './MemeDisplay';

const MemeGallery = ({ memes }) => {
  return (
    <Grid container spacing={2}>
      {memes.map((meme, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <MemeDisplay meme={meme} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MemeGallery;
