import employees from '../JSON/employees.json';
// import { makeTeamItemMarkup } from './Templates/makeTeamItemMarkup';

import sprite from '../images/icon/vk.svg';

import teamItemTpl from '../templates/team-item.hbs';

import refs from './refs';
const { teamList } = refs;

const markupTeamList = teamItemTpl({ employees });
teamList.insertAdjacentHTML('beforebegin', markupTeamList);
