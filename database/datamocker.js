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
  constructor(id) {
    this.id = id;
    this.name = '';
    this.category = '';
    this.deliveryTime = 0;
    this.favoriteCount = 0;
    this.imageUrl = '';
    this.location = '';

    this.generateName();
    this.generateCategory();
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

  generateCategory() {
    this.category = getRandomElement(categories);
  }

  generateDeliveryTime() {
    this.deliveryTime = Math.ceil(Math.random() * 90);
  }

  generateFavoriteCount() {
    this.favoriteCount = Math.floor(Math.random() * 5000);
  }

  generateImageUrl() {
    this.imageUrl = `https://nearby-restaurants-images.s3.ap-northeast-2.amazonaws.com/${Math.ceil(Math.random() * 1000)}.jpg`;
  }

  generateLocation() {
    const latitude = faker.fake('{{address.latitude}}');
    const longitude = faker.fake('{{address.longitude}}');
    this.location = `${latitude}, ${longitude}`;
  }
}

const generateMockDataCSV = () => {
  writer.pipe(fs.createWriteStream('database/data.csv'));
  for (let i = 0; i < 10000000; i++) {
    const restaurant = new Restaurant(i + 1);
    const {
      name,
      category,
      deliveryTime,
      favoriteCount,
      imageUrl,
      location,
    } = restaurant;

    writer.write({
      name,
      category,
      deliveryTime,
      favoriteCount,
      imageUrl,
      location,
    });
  }
};

module.exports = {
  Restaurant,
  categories,
};
