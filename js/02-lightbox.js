import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector("ul.gallery");
createGallery();
let gallery = new SimpleLightbox("a.gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGallery() {
  const images = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const image = `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItems[i].original}">
            <img
                class="gallery__image"
                src="${galleryItems[i].preview}"
                alt="${galleryItems[i].description}"
            />
        </a>
    </li>`;
    images.push(image);
  }
  galleryList.innerHTML = images.join("");
}
