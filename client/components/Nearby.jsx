import React, { Component } from 'react';
import $ from 'jquery';
import Carousel from './Carousel.jsx';

class Nearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      currentDeck: [],
      position: 0,
      direction: '',
      isScrolling: false,
      hideRightArrow: true,
      hideLeftArrow: true,
    };
    this.scrollByThree = this.scrollByThree.bind(this);
    this.getOrder = this.getOrder.bind(this);
  }

  componentDidMount() {
    let category;
    this.getNearbies(category || 'burgers');
  }

  getNearbies(category) {
    const data = { category };

    $.ajax({
      url: '/api/nearby',
      method: 'GET',
      contentType: 'application/json',
      data,
      error: (err) => {
        console.log(err);
      },
      success: (results) => {
        if (results.length > 3) {
          this.setState({ hideRightArrow: false });
        }
        this.setState({
          carouselData: results,
          currentDeck: results.slice(0, 12),
        });
      },
    });
  }

  getOrder(index) {
    const { position, currentDeck } = this.state;
    const numSlides = currentDeck.length;

    if (index - position < 0) {
      return numSlides - Math.abs(index - position);
    }
    return index - position;
  }

  scrollByThree(direction) {
    const { carouselData } = this.state;
    let {
      currentDeck, position, hideRightArrow, hideLeftArrow, isScrolling,
    } = this.state;

    if (direction === 'right' && position < 8) {
      position += 3;
      hideLeftArrow = false;
      isScrolling = true;
      if (position >= currentDeck.length - 3) {
        hideRightArrow = true;
      }
    } else if (direction === 'left' && position > 0) {
      position -= 3;
      hideRightArrow = false;
      isScrolling = true;
      if (position === 0) {
        hideLeftArrow = true;
      }
    }
    const currentState = {
      position, hideLeftArrow, hideRightArrow, direction, isScrolling,
    };
    this.setState({
      ...currentState,
    }, () => {
      console.log('current state', this.state);
    });
    setTimeout(() => {
      this.setState({
        isScrolling: false,
      });
    }, 100);
  }


  render() {
    const {
      carouselData, currentDeck, hideRightArrow, hideLeftArrow,
      position, isScrolling, direction,
    } = this.state;
    if (carouselData.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <div className="nearby">
        <h3>
           Other Options Nearby
        </h3>
        <Carousel currentDeck={currentDeck} hideRightArrow={hideRightArrow} hideLeftArrow={hideLeftArrow} scrollByThree={this.scrollByThree} getOrder={this.getOrder} position={position} scrolling={isScrolling} direction={direction} />
      </div>
    );
  }
}

export default Nearby;
