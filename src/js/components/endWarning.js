import { refs } from '../../constants/constants.js';

const endWarning = {
  show() {
    refs.endWarningText.style.display = 'block';
  },

  hide() {
    refs.endWarningText.style.display = 'none';
  },
};

export default endWarning;