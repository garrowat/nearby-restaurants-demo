const faker = require('faker');
const db = require('./connection.js');

db.connect();

class Restaurant {
  constructor() {
    this.name = '';
    this.categoryId = 0;
    this.deliveryTime = 0;
    this.favoriteCount = 0;
    this.imageUrl = '';
    this.location = '';
  }

  generateName() {

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

db.end()
  .then(() => console.log('client has disconnected'))
  .catch(err => console.error('error during disconnection', err.stack));

// const catQuery = 'INSERT INTO categories (name) VALUES ($1), ($2) RETURNING *';
// const values = ['italian', 'indian'];

// db.query(catQuery, values)
//   .then((res) => {
//     console.log(res.rows[0]);
//   })
//   .then(() => {
//     db
//       .end()
//       .then(() => console.log('client has disconnected'))
//       .catch(err => console.error('error during disconnection', err.stack));
//   })
//   .catch(e => console.error(e.stack));
