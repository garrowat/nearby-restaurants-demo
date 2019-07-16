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
  favorited: {
    type: Number,
    min: 0,
  },
  imageURL: String,
});

const Nearby = mongoose.model('Nearby', nearbySchema, 'Nearby');

const findNearby = category => Nearby.find({ category })
  .then(nearbies => nearbies)
  .catch(err => console.log(err));

const addFavorite = (id, increment) => Nearby.updateOne({ id }, { $inc: { favorited: increment } })
  .then(total => total)
  .catch(err => console.log(err));

module.exports = {
  findNearby,
  addFavorite,
};
