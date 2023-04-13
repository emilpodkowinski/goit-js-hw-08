import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line

const galleryEl = document.querySelector(".gallery");
for (const img of galleryItems) {
  const listEl = `<div class=“gallery__item”>
    <a class=“gallery__link” href=${img.original}>
      <img
        class=“gallery__image”
        src=${img.preview}
        data-source=${img.original}
        alt=${img.description}
      />
    </a>
  </div>`;
  galleryEl.insertAdjacentHTML("beforeend", listEl);
}
galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;
  const box = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  box.show();
});
