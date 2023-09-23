import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markup);

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"/>
        </a>
      </li>`;
    })
    .join("");
}

const lightboxModal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  optionsPosition: "bottom",
  captionDelay: 250,
});
