const path = require('path');
const db = require('./connection.js');
const { categories } = require('./mockhelperdata.js');

db.connect();


const dataPath = path.join(__dirname, '/data.csv');
const seedQuery = `COPY restaurants (name, category_id, delivery_time, favorited, image_url, location) FROM '${dataPath}' DELIMITER ',' CSV HEADER`;

const valuePlaceholders = categories.reduce((values, _, index, array) => {
  // generate the '$n' sql placeholders to accomodate all the categories for our query
  return index + 1 === array.length
    ? `${values}($${index + 1})`
    : `${values}($${index + 1}), `;
}, '');
const categoryQuery = `INSERT INTO categories (name) VALUES ${valuePlaceholders} RETURNING *`; // this should avoid injection issues due to merely placing value placeholders. The actual value substitution will still happen on the server.

Promise.resolve()
  .then(() => db.query(categoryQuery, categories))
  .then(() => console.log('Categories successfully seeded, Seeding restaurant data (10M rows), please wait.'))
  .then(db.query(seedQuery)
    .then((result) => {
      console.log('Finished seeding!, result: ', result);
      db.end();
    }))
  .catch((err) => {
    console.log('Error seeding db: ', err);
    db.end();
  });
