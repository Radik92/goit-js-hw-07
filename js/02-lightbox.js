import { galleryItems } from './gallery-items.js';


const ul = document.querySelector(".gallery");
const images = galleryItems
 .map(
  ({ preview, original, description }) =>
   `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`
 )
 .join("");
ul.insertAdjacentHTML("beforeend", images);

new SimpleLightbox(".gallery a", {
 captionsData: "alt",
 captionPosition: "bottom",
 captionDelay: 250,
});