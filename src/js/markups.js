import employees from '../JSON/employees.json';
import teamItemsTpl from '../templates/team-items.hbs';
import { makeCardMarkup } from './gallery_services_card/card_markup';

import refs from './refs';
const { teamList, workCard } = refs;

import worksCards from '../JSON/finished_works.json';

teamList.insertAdjacentHTML('afterbegin', teamItemsTpl(employees));
workCard.insertAdjacentHTML('afterbegin', makeCardMarkup(worksCards[1]));

const itemIndex = worksCards.length;

let index = 6;
workCard.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentTarget = e.target.dataset.action;
  if (currentTarget === 'prev') {
    console.log('PREV');
  }

  if (currentTarget === 'next') {
    console.log('NEXT');
    index += 1;
    console.log(index);

    show(index);
  }
});

function show(i) {
  workCard;
}
