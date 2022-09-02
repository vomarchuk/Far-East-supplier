import employees from '../JSON/employees.json';
import { makeTeamItemMarkup } from './Templates/makeTeamItemMarkup';

import refs from './refs';
const { teamList } = refs;

const markupTeamList = employees.map(makeTeamItemMarkup).join('');
teamList.insertAdjacentHTML('beforebegin', markupTeamList);
