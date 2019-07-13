const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurants', { useNewUrlParser: true }).catch((err) => {
  console.log('Unable to connect to mongodb', err);
});

mongoose.set('useCreateIndex', true);


const nearbySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  category: String,
  deliveryEst: Number,
  favorited: Number,
  imageURL: String,
});

const Nearby = mongoose.model('Nearby', nearbySchema, 'Nearby');

const findNearby = cat => Nearby.find({ category: cat })
  .then(nearbies => nearbies)
  .catch(err => console.log(err));

module.exports = {
  findNearby,
};
