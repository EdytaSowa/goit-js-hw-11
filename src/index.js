import { fetchImages } from './js/fetchImages';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a');

const input = document.querySelector('input');
const btn = document.querySelector('button');
const gallery = document.querySelector('.gallery');

btn.addEventListener('click', e => {
  e.preventDefault();
  const inputText = input.value;
  console.log(inputText);
  console.log(fetchImages(inputText));

  fetchImages(inputText).then(image => renderImages(image));
});

const renderImages = images => {
  if (images.length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  // Notiflix.Notify.success(`Hooray! We found total images.`);

  const markup = images
    .map(image => {
      //   console.log(image);
      return `
<div class="photo-card">
 <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /></a> 
  <div class="info">
    <p class="info-item">
      <b>Likes </b>  ${image.likes}
    </p>
    <p class="info-item">
      <b>Views </b> ${image.views}
    </p>
    <p class="info-item">
      <b>Comments </b> ${image.comments}
    </p>
    <p class="info-item">
      <b>Downloads </b> ${image.downloads}
    </p>
  </div>
</div>`;
    })
    .join('');
    gallery.innerHTML = markup;
   
    lightbox.refresh();
};
