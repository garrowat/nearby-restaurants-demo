const faker = require('faker');
const { adjectives, nouns } = require('./mockhelperdata.js');

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

class Restaurant {
  constructor() {
    this.name = '';
    this.categoryId = 0;
    this.deliveryTime = 0;
    this.favoriteCount = 0;
    this.imageUrl = '';
    this.location = '';

    this.generateName();
  }

  generateName() {
    const owner = faker.fake('{{name.firstName}}');
    const adjective = getRandomElement(adjectives);
    const noun = '';
    this.name = `${owner}'s ${adjective} ${noun}`;
  }

  generateCategoryId() {

  }

  generateDeliveryTime() {

  }

  generateFavoriteCount() {

  }

  generateImageUrl() {

  }

  generateLocation() {

  }

}

const categories = [];

module.exports = {
  Restaurant,
  categories,
};
