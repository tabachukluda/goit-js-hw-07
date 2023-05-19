import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
        `;
    }).join("");
}

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
})

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
})
console.log(galleryItems);
