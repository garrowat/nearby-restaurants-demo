const faker = require('faker');
const { adjectives, nouns, categories } = require('./mockhelperdata.js');

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
    this.generateCategoryId();
  }

  generateName() {
    const owner = faker.fake('{{name.firstName}}');
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
    this.name = `${owner}'s ${adjective} ${noun}`;
  }

  generateCategoryId() {
    this.categoryId = Math.floor(Math.random() * categories.length);
  }

  generateDeliveryTime() {
    this.deliveryTime = Math.floor(Math.random() * 90);
  }

  generateFavoriteCount() {
    this.favoriteCount = Math.floor(Math.random() * 5000);
  }

  generateImageUrl() {
    this.ImageUrl = `s3url/${Math.floor(Math.random() * 1000)}.jpg`;
  }

  generateLocation() {
    const latitude = faker.fake('{{address.latitude}}');
    const longitude = faker.fake('{{address.longitude}}');
    this.postGISLocation = `SRID=4326;POINT(${longitude} ${latitude})`;
  }

}

module.exports = {
  Restaurant,
  categories,
};
