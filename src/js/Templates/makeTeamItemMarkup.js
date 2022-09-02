import sprite from '../../images/icon/sprite.svg';

export const makeTeamItemMarkup = employee => {
  const { firstName, lastName, position, avatar } = employee;
  return `
   <li class="team__item">
    <div class="rotate"></div>
    <img
      class="photo"
      width="100"
      src=${avatar}
      alt="avatar ${firstName} ${lastName}"
    />
    <div class="description">
      <h2 class="secondary__title">${firstName} ${lastName}</h2>
      <p class="text">${position}</p>
      <ul class="social__list">
        <li class="social__item">
          <a href="http://" target="_blank" rel="noopener">
            <svg width="20" height="20">
              <use href="${sprite}#icon-instagram"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a href="http://" target="_blank" rel="noopener">
            <svg width="29" height="17">
              <use href="${sprite}#icon-vk"></use>
            </svg>
          </a>
        </li>
        <li class="social__item">
          <a href="http://" target="_blank" rel="noopener">
            <svg width="20" height="20">
              <use href="${sprite}#icon-linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </li>`;
};
