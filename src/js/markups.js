import employees from '../JSON/employees.json';
import teamItemsTpl from '../templates/team-items.hbs';
import { makeCardMarkup } from './gallery_services_card/card_markup';

import refs from './refs';
const { teamList, workCard, ourWorksContainer } = refs;

import worksCards from '../JSON/finished_works.json';

const itemIndex = worksCards.length - 1;
let index = 0;
ourWorksContainer.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentTarget = e.target.dataset.action;
  if (currentTarget === 'prev') {
    if (index === 0) index = itemIndex + 1;
    index--;
    show(index);
  }

  if (currentTarget === 'next') {
    index++;
    if (index > itemIndex) index = 0;
    show(index);
  }
});

function show(i) {
  workCard.innerHTML = makeCardMarkup(worksCards[i]);
}
show(0);
teamList.insertAdjacentHTML('afterbegin', teamItemsTpl(employees));
