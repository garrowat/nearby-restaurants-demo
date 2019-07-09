const mongoose = require('mongoose');
mongoose.connect('monogdb://localhost/restaurants');

let nearBy = new mongoose.Schema ({
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