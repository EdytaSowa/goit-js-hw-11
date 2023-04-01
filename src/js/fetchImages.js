import axios from 'axios';

const KEY = '30898532-07677536b584d5a486c7433f6';

export const fetchImages = async text => {
  try {
    const baseUrl = 'https://pixabay.com/api/?key=';
    const firstResponse = await axios.get(
      `${baseUrl}` +
        `${KEY}` +
        '&q=' +
        `${text}` +
        '&image_type=photo&orientation=horizontal&safesearch=true'
    );

    const images = firstResponse.data.hits;

    // console.log(images);
    return images;

    
  } catch (error) {
    console.error(error);
  }
};

fetchImages('red cat');
