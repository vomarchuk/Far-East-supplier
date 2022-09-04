import collection from '../../JSON/finished_works.json';
import { show } from '../markups';

let index = 0;
const onCollectionBtnClick = e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentTarget = e.target.dataset.action;

  if (currentTarget === 'prev') {
    index--;
    if (index < 0) index = collection.length - 1;
    show(index);
  }

  if (currentTarget === 'next') {
    index++;
    if (index > collection.length - 1) index = 0;
    show(index);
  }
};
export { onCollectionBtnClick };
