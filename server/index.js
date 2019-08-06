require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: `http://${process.env.ESHOST}:${process.env.ESPORT}`, log: 'trace' });

const app = express();
const PORT = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:carousel_id', express.static(`${__dirname}/../public`));

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });

app.post('/api/nearby/', (req, res) => {
  const newCarousel = req.body;
  client.create({
    index: 'restaurants',
    body: newCarousel,
  });
});

app.get('/api/nearby/:carousel_id', (req, res) => {
  const id = req.params.carousel_id;
  client.search({
    index: 'restaurants',
    q: `id:${id}`,
  })
    .then((results) => {
      const restaurant = results.body.hits.hits[0]._source;
      res.status(200).send([restaurant, restaurant, restaurant, restaurant, restaurant, restaurant]);
    })
    .catch(err => res.status(400).send(err));
});

app.put('/api/nearby/', (req, res) => {
  const { id, carousel } = req.body;
  db.updateCarouselById(id, carousel)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(err => res.status(400).json(err));
});

app.put('/api/nearby/favorite/:carousel_id', (req, res) => {
  console.log('faved!');
  db.addFavorite(req.params.carousel_id, req.query.restaurantId, req.query.increment)
    .then(updated => res.status(202).send(updated.carousel))
    .catch(err => res.status(400).json(err));
});

app.delete('/api/nearby/:carousel_id', (req, res) => {
  let targetCarousel;
  db.findCarousel(req.params.carousel_id) // find the carousel so we can return it on deletion
    .then((data) => {
      if (data[0].carousel.length === 0) {
        throw Error('Carousel not found');
      } else {
        targetCarousel = data;
      }
    })
    .then(() => db.deleteCarouselById(req.params.carousel_id))
    .then(() => {
      if (targetCarousel) {
        res.status(200).send(targetCarousel);
      } else {
        throw new Error('Record not found');
      }
    })
    .catch(err => res.status(400).send(err));
});
