import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

const images = galleryItems
 .map(
  ({ preview, original, description }) =>
   `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
 )
 .join("");
ul.insertAdjacentHTML("beforeend", images);

ul.addEventListener("click", onImgClick);

function onImgClick(e) {
 e.preventDefault();

 const instance = basicLightbox.create(`
   <img src="${e.target.dataset.source}" alt="${e.target.alt}">
  `);

 if (e.target.classList.contains("gallery__image")) {
  instance.show();
  window.addEventListener(
   "keydown",
   (e) => {
    if (e.key === "Escape") {
     instance.close();
    }
   },
   { once: true }
  );
 }
}