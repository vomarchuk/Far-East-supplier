import './sass/main.scss';
import refs from './js/refs';
import './js/markups';
import { checkedClientActivity } from './js/checkedClientActivity';

const { activityList } = refs;

activityList.addEventListener('click', checkedClientActivity);

const formFile = document.querySelector('.form__file');

formFile.addEventListener('change', e => {
  const uploadedFile = document.createElement('p');
  uploadedFile.classList.add('form__file-upload');
  uploadedFile.textContent = formFile.value;
  // formFile.before(uploadedFile);
  formFile.innerHTML = uploadedFile;
});
