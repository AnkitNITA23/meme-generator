import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import MemeForm from './components/MemeForm';
import MemeDisplay from './components/MemeDisplay';
import MemeGallery from './components/MemeGallery';
import { generateMeme } from './apiService';

const App = () => {
  const [meme, setMeme] = useState(null);
  const [gallery, setGallery] = useState([]);

  const handleGenerate = (templateId, topText, bottomText) => {
    generateMeme(templateId, topText, bottomText).then((memeUrl) => {
      setMeme(memeUrl);
      setGallery([...gallery, memeUrl]);
    });
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Meme Generator
      </Typography>
      <MemeForm onGenerate={handleGenerate} />
      <MemeDisplay meme={meme} />
      <Typography variant="h4" gutterBottom>
        Meme Gallery
      </Typography>
      <MemeGallery memes={gallery} />
    </Container>
  );
};

export default App;
