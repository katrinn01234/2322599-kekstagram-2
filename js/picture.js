import { openBigPicture } from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const renderPhotos = (photos) => {
  const picturesFragment = document.createDocumentFragment();
  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent =
      comments.length;

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      const photo = { url, description, likes, comments };
      openBigPicture(photo);
    });

    picturesFragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(picturesFragment);
};

export { renderPhotos };
