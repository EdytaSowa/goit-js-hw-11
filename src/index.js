import { fetchImages } from './js/fetchImages';
import { renderImages } from './js/renderImages';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

const input = document.querySelector('input');
const btn = document.querySelector('button');
const gallery = document.querySelector('.gallery');
const paginationBtn = document.querySelector('.load-more');

let page = 1;
paginationBtn.classList.add('hidden');

btn.addEventListener('click', e => {
  e.preventDefault();
  const inputText = input.value;

  fetchImages(inputText, page).then(({ data }) => {
    gallery.innerHTML = '';

    if (data.totalHits === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      Notiflix.Notify.success(`"Hooray! We found ${data.totalHits} images."`);
      renderImages(data.hits);
      paginationBtn.classList.remove('hidden');
      lightbox.refresh();
    }
  });
});

paginationBtn.addEventListener('click', e => {
  page++;
  e.preventDefault();
  paginationBtn.classList.add('hidden');
  const inputText = input.value;

  fetchImages(inputText, page).then(({ data }) => {
    if (page > Math.floor(data.hits / 40)) {
      paginationBtn.classList.add('hidden');
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
    } else {
      renderImages(data.hits);
      paginationBtn.classList.remove('hidden');
      lightbox.refresh();
    }
  });
});
