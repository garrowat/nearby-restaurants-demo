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
      hideRightArrow: true,
      hideLeftArrow: true,
    };
    this.scrollByThree = this.scrollByThree.bind(this);
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
          currentDeck: results.slice(0, 3),
        });
      },
    });
  }

  scrollByThree(direction) {
    const { carouselData } = this.state;
    let {
      currentDeck, position, hideRightArrow, hideLeftArrow,
    } = this.state;

    if (direction === 'right' && position < 8) {
      position += 3;
      hideLeftArrow = false;
      if (position === 9) {
        hideRightArrow = true;
      }
    } else if (direction === 'left' && position > 0) {
      position -= 3;
      hideRightArrow = false;
      if (position === 0) {
        hideLeftArrow = true;
      }
    }
    currentDeck = carouselData.slice(position, position + 3);
    const currentState = {
      currentDeck, position, hideLeftArrow, hideRightArrow,
    };
    this.setState({
      ...currentState,
    }, () => {
      console.log('current state', this.state);
    });
  }


  render() {
    const {
      carouselData, currentDeck, hideRightArrow, hideLeftArrow,
      position,
    } = this.state;
    if (carouselData.length === 0) {
      return (<div>LOADING</div>);
    }
    console.log('right', hideRightArrow, 'left', hideLeftArrow);
    return (
      <div className="nearby">
          Other Options Nearby
        <Carousel currentDeck={currentDeck} hideRightArrow={hideRightArrow} hideLeftArrow={hideLeftArrow} scrollByThree={this.scrollByThree} position={position} />
      </div>
    );
  }
}

export default Nearby;
