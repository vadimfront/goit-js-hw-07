import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function galleryBuilder(items) {
  items.forEach(({ preview, original, description }) => {
    const galleryItem = `<li class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
    gallery.innerHTML += galleryItem;
  });
}
galleryBuilder(galleryItems);

gallery.addEventListener("click", modalOpen);

function modalOpen(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const imgSrc = e.target.dataset.source;

  const modalImg = basicLightbox.create(`
    <img src=${imgSrc} width="1280" height="855">
`);
  modalImg.show();
  document.addEventListener("keydown", (event) => modalClose(event, modalImg));
}

function modalClose(e, modal) {
  if (e.code === "Escape") {
    modal.close();
    e.preventDefault();
    document.removeEventListener("keydown", modalClose);
  }
}
