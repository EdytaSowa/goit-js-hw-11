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
        '&image_type=photo&orientation=horizontal&safesearch&per&per_page=40'
    );
    // console.log(firstResponse);
    const images = firstResponse.data.hits;
    // const totalHits = firstResponse.data.totalHits;

    // console.log(totalHits);

    // console.log(images);
    return images;
  } catch (error) {
    console.error(error);
  }
};

fetchImages('red cat');
