import { refs } from '../../constants/constants.js';
import { renderGallery } from '../render-functions.js';


const gallery = {

  show(photos) {
    refs.gallery.innerHTML = renderGallery(photos);
  },

  addNewPhotos(photos) {
    const newPhotosHTML = renderGallery(photos);
    refs.gallery.innerHTML = refs.gallery.innerHTML + newPhotosHTML;
  },

  clear() {
    refs.gallery.innerHTML = '';
  },
};

export default gallery;