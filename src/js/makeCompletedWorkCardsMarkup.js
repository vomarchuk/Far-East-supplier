import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 300,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

export const makeCompletedWorkCardsMarkup = collection => {
  return collection
    .map(i => {
      const {
        preview,
        alt,
        description: { title, description, price },
      } = i;
      return `
    <div class="swiper-slide">
      <img class="card__img" src=${preview}  alt=${alt} />
      <h2 class="card__title secondary__title">${title}</h2>
      <p class="text card__text">${description}</p>
      <p class="text card__price">${price}</p>
    </div>`;
    })
    .join('');
};
