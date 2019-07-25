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

// const addCarousel = newCarousel => Carousel.create(newCarousel);

// const findCarousel = id => Carousel.find({ id }).exec();

// const addFavorite = (id, restaurantId, increment) => Carousel.findOneAndUpdate(
//   { id, carousel: { $elemMatch: { restaurantId } } },
//   { $inc: { 'carousel.$.favorited': increment } }, { new: true },
// ).exec();

// update carousel use findOneAndUpdate, adds a restaurant to a carousel

// delete carousel deletes whole carousel

module.exports = {
  addCarousel: newCarousel => Carousel.create(newCarousel),

  findCarousel: id => Carousel.find({ id }).exec(),

  addFavorite: (id, restaurantId, increment) => Carousel.findOneAndUpdate(
    { id, carousel: { $elemMatch: { restaurantId } } },
    { $inc: { 'carousel.$.favorited': increment } }, { new: true },
  ).exec(),

  updateCarouselById: carouselUpdate => Carousel.findOneAndUpdate(
    { id: carouselUpdate.id }, carouselUpdate,
  ).exec(),
};
