// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const creatCardContainer = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);

creatCardContainer.insertAdjacentHTML('beforeend', cardsMarkup)
function createCardsMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" 
      href="${original}">
      <img class="gallery__image"
       src="${preview}" 
       alt="${description}" />
    </a>`;
    }).join('');
}
const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay: 250 })

  lightbox.show();
