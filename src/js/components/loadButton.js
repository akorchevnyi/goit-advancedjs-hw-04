import { refs } from '../../constants/constants.js';
import { handleLoadMore } from '../../main.js';

const loadButton = {
  show() {
    refs.loadBtn.style.display = 'block';
    refs.loadBtn.addEventListener('click', handleLoadMore);
  },

  hide() {
    refs.loadBtn.removeEventListener('click', handleLoadMore);
    refs.loadBtn.style.display = 'none';
  },
};

export default loadButton;