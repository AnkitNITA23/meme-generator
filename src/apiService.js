import axios from 'axios';

const MEMEGEN_API_URL = 'https://api.memegen.link';

export const getTemplates = () => {
  return axios.get(`${MEMEGEN_API_URL}/templates`);
};

export const generateMeme = (templateId, topText, bottomText) => {
  const memeUrl = `${MEMEGEN_API_URL}/images/${templateId}/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png`;
  return axios
    .get(memeUrl, { responseType: 'arraybuffer' })
    .then(response => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      return `data:image/png;base64,${base64}`;
    });
};
