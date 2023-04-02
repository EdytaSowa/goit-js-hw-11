import axios from 'axios';

const KEY = '30898532-07677536b584d5a486c7433f6';
const baseUrl = 'https://pixabay.com/api/?key=';

export const fetchImages = async (text, page) => {
  try {
    const response = await axios.get(`
      ${baseUrl}${KEY}&q=${text}&image_type=photo&orientation=horizontal&safesearch&per&per_page=40&page=${page}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};




