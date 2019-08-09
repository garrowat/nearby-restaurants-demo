require('dotenv').config();
const client = require('./index.js');
const { Restaurant } = require('./datamocker.js');

async function putMapping() {
  console.log('Creating Mapping index');
  client.indices.putMapping({
    index: 'restaurants',
    body: {
      properties: {
        name: { type: 'text' },
        category: { type: 'text' },
        deliveryTime: { type: 'integer' },
        favoriteCount: { type: 'integer' },
        imageUrl: { type: 'text' },
        location: { type: 'geo_point' },
      },
    },
  }, (err, res, status) => {
    if (err) {
      console.error(err, status);
    }
    else {
      console.log('Successfully Created Index', status, res);
    }
  });
}

const seedToES = async () => {
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  let completion = 0;
  await client.indices.delete({
    index: 'restaurants',
  })
    .catch(err => console.log(err));

  await client.indices.create({
    index: 'restaurants',
  });

  await putMapping();

  let fakeItems = [];

  for (let i = 1; i <= 10000000; i += 1) {
    const restaurant = new Restaurant(i);
    fakeItems.push(`{ "index": { } }}\n${JSON.stringify(restaurant)}\n`);
    if (i % 500000 === 0) {
      completion += 5;
      console.log(`${completion}% complete`);
    }
    if (i % 10000 === 0) {
      await client.bulk({
        index: 'restaurants',
        body: [...fakeItems],
      })
      .catch(err => console.log(err));
      fakeItems = [];
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};

seedToES()
  .catch(err => console.log(err));
