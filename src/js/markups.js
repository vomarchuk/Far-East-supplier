import employees from '../JSON/employees.json';
import teamItemsTpl from '../templates/team-items.hbs';
import refs from './refs';
const { teamList } = refs;

teamList.insertAdjacentHTML('beforebegin', teamItemsTpl(employees));
