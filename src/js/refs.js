const refs = {
  activityList: document.querySelector('.activity__list'),
  activityItems: document.querySelectorAll('.js--activity__item'),

  teamList: document.querySelector('.team__list'),

  workCard: document.querySelector('.wokr__card'),
};

export default refs;

const btnPrevCard = document.querySelector('button[data-action="prev"]');
const btnNexCard = document.querySelector('button[data-action="next"]');
