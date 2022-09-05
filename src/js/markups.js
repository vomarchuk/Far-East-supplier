import employees from '../JSON/employees.json';
import teamItemsTpl from '../templates/team-items.hbs';
import { makeCardsMarkup } from './makeCardsMarkup';
import worksCards from '../JSON/finished_works.json';

import refs from './refs';
const { teamList, collectionCards } = refs;

collectionCards.insertAdjacentHTML('afterbegin', makeCardsMarkup(worksCards));

teamList.insertAdjacentHTML('afterbegin', teamItemsTpl(employees));
