import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '30577990-20685eea61ea3ba40def670da';

axios.defaults.baseURL = BASE_URL;

export const getImagesData = async (query, page) => {
  axios.defaults.params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  };

  const response = await axios.get();
  return response.data;
};
