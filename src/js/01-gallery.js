import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  galleryEl.innerHTML += ` <a class="gallery__link" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`;
});
  

let lightbox = new SimpleLightbox(".gallery a",{
  captionDelay: 250,
  captionsData: "alt"
});
