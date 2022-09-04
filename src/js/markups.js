import employees from '../JSON/employees.json';
import teamItemsTpl from '../templates/team-items.hbs';
import { makeCardMarkup } from './gallery_services_card/card_markup';
import { onCollectionBtnClick } from './gallery_services_card/onCollectionBtnClick';
import worksCards from '../JSON/finished_works.json';

import refs from './refs';
const { teamList, workCard, ourWorksContainer, customRadioCollection } = refs;

customRadioCollection.forEach(item => {
  if (item.checked) {
    console.log(item.checked);
  }
});

export const show = i => (workCard.innerHTML = makeCardMarkup(worksCards[i]));
ourWorksContainer.addEventListener('click', onCollectionBtnClick);

workCard.innerHTML = makeCardMarkup(worksCards[0]);
teamList.insertAdjacentHTML('afterbegin', teamItemsTpl(employees));
