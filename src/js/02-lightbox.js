import { galleryItems } from './gallery-items.js';
// Change code below this line

//  console.log(galleryItems);

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


