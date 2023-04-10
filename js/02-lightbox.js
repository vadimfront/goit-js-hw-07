import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function galleryBuilder(items) {
  items.forEach(({ preview, original, description }) => {
    const galleryItem = `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
    gallery.insertAdjacentHTML("afterbegin", galleryItem);
  });
}
galleryBuilder(galleryItems);

const simpleLightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
