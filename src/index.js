import './sass/main.scss';
import refs from './js/refs';
import { checkedClientActivity } from './js/checkedClientActivity';

const { activityList } = refs;

activityList.addEventListener('click', checkedClientActivity);
const teamList = document.querySelector('.team__list');

import employees from './JSON/employees.json';

const markupTeamList = employees.map(employee => {
  const { firstName, lastName, position, avatar } = employee;

  return ` 
   <li class="team__item">
    <div class="rotate"></div>

    <img
      class="photo"

      src="./images/team/Makarov/makarov@1x.jpg"
      alt="photo Makarov"
    />
    <div class="description">
      <h2 class="secondary__title">${firstName} ${lastName}</h2>
      <p class="text">${position}</p>
      <ul class="social__list">
        <li class="social__item">
          <a href="http://" target="_blank" rel="noopener">
            <svg width="20" height="20">
              <use href="./images/icon/sprite.svg#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a href="http://" target="_blank" rel="noopener">
            <svg width="29" height="17">
              <use href="./images/icon/sprite.svg#icon-vk"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a href="http://" target="_blank" rel="noopener">
            <svg width="20" height="20">
              <use href="./images/icon/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </li>`;
});

teamList.innerHTML = markupTeamList;
