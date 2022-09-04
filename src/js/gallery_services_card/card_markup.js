export const makeCardMarkup = card => {
  const {
    preview,
    description: { title, description, price },
  } = card;
  console.log(title);

  return `
    <img class="card__img" src=${preview}  alt=${title} />
    <h2 class="card__title secondary__title">${title}</h2>
    <p class="card__text text">${description}</p>
    <p class="text card__price">${price}</p>
  `;
};
