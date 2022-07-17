import data from '../data/DATA.json';
const dataRestaurant = data.restaurants;

const loadRestaurant = (restaurants) => {
  const restaurantlist = document.querySelector('.posts');
  restaurantlist.innerHTML = '';
  restaurants.slice(-6).forEach((resto) => {
    const { pictureId, name, city, rating, description } = resto;

    const item = `
    <article class="post-item">
        <img class="post-item__thumbnail"
        src="${pictureId}"
        alt="${name} Image">
        <div class="post-item__content">
          <p class="post-item__date">&#9733&nbsp${rating}  
            &nbsp|&nbsp<em href="#" class="post-item__date__author">${city}</em>
          </p>
          <h1 class="post-item__title"><b><a href="#">${name}</a></b></h1><br>
          <hr>
          <p class="post-item__description">${description}</p><br>
        </div>
    </article>
    `;
    restaurantlist.innerHTML += item;
  });
};

loadRestaurant(dataRestaurant);
