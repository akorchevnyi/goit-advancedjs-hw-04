import { refs, simpleLightboxOptions, STORAGE_KEY } from './constants/constants.js';
import { getPhotos } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';


let query = fillFormFields(refs.form);

refs.form.addEventListener('input', handleFormInput);
refs.form.addEventListener('submit', handleSearch);
const simpleLightBox = new SimpleLightbox('.gallery li a', simpleLightboxOptions);

function handleFormInput(e) {
  query = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, query);
}


async function handleSearch(e) {
  e.preventDefault();
  if (!query) return;

  refs.gallery.innerHTML = '';
  refs.loader.style.display = 'block';

  const photos = await getPhotos(query);

  if (!photos) {
    iziToast.error({ message: 'Sorry, there was an error while getting photos. Please try again!', position: 'topRight' });
  }
  else if (photos.length === 0) {
    iziToast.warning({ message: 'Sorry, there are no images matching your search query. Please try again!', position: 'topRight' });
  }
  else {
    refs.gallery.innerHTML = renderGallery(photos);
    simpleLightBox.refresh();
    query = '';
    localStorage.removeItem(STORAGE_KEY);
    refs.form.reset();
  }

  refs.loader.style.display = 'none';
}


function fillFormFields(form) {
  const localStorageData = localStorage.getItem(STORAGE_KEY);
  if (!localStorageData) return;

  form.elements.query.value = localStorageData;
  return localStorageData || '';
}