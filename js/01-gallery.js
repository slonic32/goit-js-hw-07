import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector("ul.gallery");
createGallery();

galleryList.addEventListener("click", viewImage);

function createGallery() {
  const images = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const image = `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItems[i].original}">
            <img
                class="gallery__image"
                src="${galleryItems[i].preview}"
                data-source="${galleryItems[i].original}"
                alt="${galleryItems[i].description}"
            />
        </a>
    </li>`;
    images.push(image);
  }
  galleryList.innerHTML = images.join("");
}

function viewImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const imageLightBox = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.getAttribute(
      "alt"
    )}" width="800" height="600"/>`
  );
  imageLightBox.show(cbLightBox);
}

function cbLightBox(instance) {
  function closeLightBox(event) {
    if (event.code === "Escape") {
      document.removeEventListener("keydown", closeLightBox);
      instance.close();
    }
  }
  document.addEventListener("keydown", closeLightBox);
}
