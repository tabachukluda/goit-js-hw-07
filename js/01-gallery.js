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
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>
        `;
    }).join("");
}

let instance; 

galleryEl.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const selectedImage = event.target.getAttribute('data-source');
    instance = basicLightbox.create(`
        <img src="${selectedImage}" width="1280" height="900">
    `);
    instance.show();
});

galleryEl.addEventListener('click', onGalleryElClick);

function onGalleryElClick(event) {
    if (!event.target.classList.contains('gallery__link')) {
        return;
    }

    const switchCardEl = event.target;
    switchCardEl.classList.add('hover');
}

galleryEl.addEventListener('keydown', event => {
    if (event.key === 'Escape' && instance) {
        instance.close();
    }
});
