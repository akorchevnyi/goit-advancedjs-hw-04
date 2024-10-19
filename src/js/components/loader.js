import { refs } from '../../constants/constants.js';

const loader = {
  show() {
    refs.loader.style.display = 'block';
  },

  hide() {
    refs.loader.style.display = 'none';
  },
};

export default loader