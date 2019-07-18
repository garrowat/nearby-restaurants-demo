const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carousels', { useNewUrlParser: true }).catch((err) => {
  console.log('Unable to connect to mongodb', err);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


const CarouselSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  carousel: [{
    restaurantId: Number,
    name: String,
    category: String,
    deliveryEst: Number,
    favorited: {
      type: Number,
      min: 0,
    },
    image: String,
  }],
});

const Carousel = mongoose.model('Carousel', CarouselSchema, 'Carousel');

const findCarousel = id => Carousel.find({ id })
  .then(carousel => carousel[0].carousel)
  .catch(err => console.log(err));

const addFavorite = (id, restaurantId, increment) => Carousel.findOneAndUpdate(
  { id, carousel: { $elemMatch: { restaurantId } } },
  { $inc: { 'carousel.$.favorited': increment } }, { new: true },
)
  .then(updated => updated)
  .catch(err => console.log('update db failure', err));


module.exports = {
  findCarousel,
  addFavorite,
};
