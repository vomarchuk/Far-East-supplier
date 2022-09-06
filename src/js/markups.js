import employees from '../JSON/employees.json';
import teamItemsTpl from '../templates/team-items.hbs';
import tableAttractedClientsTpl from '../templates/attracted-client-item.hbs';
import { makeCompletedWorkCardsMarkup } from './makeCompletedWorkCardsMarkup';
import attractedClients from '../JSON/attractedClients.json';
import completedWorksCards from '../JSON/finished_works.json';

import refs from './refs';
const { teamList, collectionCompletedWorksCards, tableAttractedClients } = refs;

collectionCompletedWorksCards.insertAdjacentHTML(
  'afterbegin',
  makeCompletedWorkCardsMarkup(completedWorksCards),
);

teamList.insertAdjacentHTML('afterbegin', teamItemsTpl(employees));
tableAttractedClients.insertAdjacentHTML('afterbegin', tableAttractedClientsTpl(attractedClients));
