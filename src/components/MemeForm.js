import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';
import { getTemplates } from '../apiService';

const MemeForm = ({ onGenerate }) => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  useEffect(() => {
    getTemplates().then(response => setTemplates(response.data));
  }, []);

  const handleGenerate = () => {
    onGenerate(selectedTemplate, topText, bottomText);
  };

  return (
    <Box component="div" m={2}>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Template</InputLabel>
        <Select
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
          label="Template"
        >
          {templates.map(template => (
            <MenuItem key={template.id} value={template.id}>
              {template.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Top Text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <TextField
        label="Bottom Text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <Button onClick={handleGenerate} variant="contained" color="primary">
        Generate Meme
      </Button>
    </Box>
  );
};

export default MemeForm;
