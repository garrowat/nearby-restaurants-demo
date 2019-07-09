const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants', { useNewUrlParser: true }).catch((err) => {
  console.log('Unable to connect to mongodb', err)
});

mongoose.set('useCreateIndex', true);

let Nearby = new mongoose.Schema ({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  category: String,
  deliveryEst: Number,
  favorited: Number,
  imageURL: String
});

// let Nearby = mongoose.model('Nearby', schema);

