export const makeCardMarkup = card => {
  const {
    preview,
    alt,
    description: { title, description, price },
  } = card;
  return `
    <img class="card__img" src=${preview}  alt=${alt} />
    <h2 class="card__title secondary__title">${title}</h2>
    <p class="card__text text">${description}</p>
    <p class="text card__price">${price}</p>
  `;
};

// const test = document.querySelector('.swiper-wrapper');

// import Swiper, { Navigation, Pagination } from 'swiper';

// var swiper = new Swiper('.mySwiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true,
//   },
// });

// import collection from '../../JSON/finished_works.json';
// const markup = () => {
//   return collection.map(i => {
//     const {
//       preview,
//       alt,
//       description: { title, description, price },
//     } = i;
//     console.log(i.price);
//     return `
//     <div class="swiper-slide">
//       <img class="card__img" src=${preview}  alt=${alt} />
//       <h2 class="card__title secondary__title">${title}</h2>
//       <p class="card__text text">${description}</p>
//       <p class="text card__price">${price}</p>
//     </div>`;
//   });
// };

// test.innerHTML = markup();

// return `
//   <img class="card__img" src=${preview}  alt=${alt} />
//   <h2 class="card__title secondary__title">${title}</h2>
//   <p class="card__text text">${description}</p>
//   <p class="text card__price">${price}</p>
// `;
