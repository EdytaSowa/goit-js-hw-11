import { fetchImages } from './js/fetchImages';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const gallery = document.querySelector('.gallery');

btn.addEventListener('click', e => {
  e.preventDefault();
  const inputText = input.value;
  console.log(inputText);
  fetchImages(inputText).then(image => renderImages(image));
});

const renderImages = images => {
  const markup = images
    .map(image => {
      console.log(image.likes);

      return `
<div class="photo-card">
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
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
  console.log(markup);
  gallery.innerHTML = markup;
};
