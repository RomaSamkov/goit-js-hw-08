// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const galleryImagesContainerEl = document.querySelector('.gallery');
const itemsMurkup = createItemsImagesMurkup(galleryItems);
galleryImagesContainerEl.insertAdjacentHTML('beforeend', itemsMurkup);


function createItemsImagesMurkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    }).join('');
} 

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});