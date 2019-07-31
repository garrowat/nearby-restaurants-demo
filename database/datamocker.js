const csvWriter = require('csv-write-stream');
const fs = require('fs');
const faker = require('faker');
const { adjectives, nouns, categories } = require('./mockhelperdata.js');

const writer = csvWriter();

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
    this.postGISLocation = '';

    this.generateName();
    this.generateCategoryId();
    this.generateDeliveryTime();
    this.generateFavoriteCount();
    this.generateImageUrl();
    this.generateLocation();
  }

  generateName() {
    const owner = faker.fake('{{name.firstName}}');
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
    this.name = `${owner}'s ${adjective} ${noun}`;
  }

  generateCategoryId() {
    this.categoryId = Math.ceil(Math.random() * categories.length);
  }

  generateDeliveryTime() {
    this.deliveryTime = Math.ceil(Math.random() * 90);
  }

  generateFavoriteCount() {
    this.favoriteCount = Math.floor(Math.random() * 5000);
  }

  generateImageUrl() {
    this.imageUrl = `s3url/${Math.floor(Math.random() * 1000)}.jpg`;
  }

  generateLocation() {
    const latitude = faker.fake('{{address.latitude}}');
    const longitude = faker.fake('{{address.longitude}}');
    this.postGISLocation = `SRID=4326;POINT(${longitude} ${latitude})`;
  }
}

const generateMockDataCSV = () => {
  writer.pipe(fs.createWriteStream('database/data.csv'));
  for (let i = 0; i < 10000000; i++) {
    const restaurant = new Restaurant();
    const {
      name,
      categoryId,
      deliveryTime,
      favoriteCount,
      imageUrl,
      postGISLocation,
    } = restaurant;

    writer.write({
      name,
      categoryId,
      deliveryTime,
      favoriteCount,
      imageUrl,
      postGISLocation,
    });
  }
};

generateMockDataCSV();

module.exports = {
  Restaurant,
  categories,
};
