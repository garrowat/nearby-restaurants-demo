import React, { Component } from 'react';
import styled from 'styled-components';
import { MdChevronRight } from 'react-icons/md';
import $ from 'jquery';
import Carousel from './Carousel.jsx';


const TopBar = styled.div`
  height: 30px;
  length: 100%;
  display: flex;
  text-transform: capitalize;
  padding-bottom: 14px;
  align-items: flex-end;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(217,219,224,0.5);
`;

const RightChevron = styled(MdChevronRight)`
  position: relative;
  margin-top: auto;
  height: 26px;
  width: 26px;
  color: #8F95A3;
`;

const id = window.location.pathname;

class Nearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      position: 0,
      direction: '',
      offset: '',
      hideRightArrow: true,
      hideLeftArrow: true,
    };
    this.scrollByThree = this.scrollByThree.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  componentDidMount() {
    fetch(`/api${id}`)
      .then(carousel => carousel.json())
      .then((carousel) => {
        if (carousel.length > 3) { this.setState({ hideRightArrow: false }); }
        this.setState({ carouselData: carousel });
      })
      .catch(err => console.log(err));
  }


  scrollByThree(direction) {
    const { carouselData } = this.state;
    let {
      position, hideRightArrow, hideLeftArrow, offset,
    } = this.state;

    if (direction === 'right' && position < 8) {
      position += 3;
      hideLeftArrow = false;
      if (position >= carouselData.length - 3) {
        hideRightArrow = true;
      }
    } else if (direction === 'left' && position > 0) {
      position -= 3;
      hideRightArrow = false;
      if (position === 0) {
        hideLeftArrow = true;
      }
    }
    offset = `translateX(calc(-${100 * position / 3}% + -${36 * position / 3}px))`;
    const currentState = {
      position, hideLeftArrow, hideRightArrow, direction, offset,
    };
    this.setState({
      ...currentState,
    });
  }

  addFavorite(restaurantId, favoriteAdded, index) {
    const { carouselData } = this.state;
    let increment;
    if (!favoriteAdded) {
      increment = 1;
    } else {
      increment = -1;
    }
    const data = { restaurantId, increment };
    fetch(`/api${id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => this.setState({ carouselData: res }))
      .catch(err => console.log(err));
  }

  render() {
    const {
      carouselData, hideRightArrow, hideLeftArrow,
      position, offset, direction,
    } = this.state;
    if (carouselData.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <div className="nearby">
        <TopBar>
          <h3>Other Options Nearby</h3>
          <div className="allInArea">
            {`All ${carouselData[0].category} Delivery `}
          </div>
          <RightChevron />
        </TopBar>
        <Carousel
          carouselData={carouselData}
          hideRightArrow={hideRightArrow}
          hideLeftArrow={hideLeftArrow}
          scrollByThree={this.scrollByThree}
          addFavorite={this.addFavorite}
          position={position}
          offset={offset}
          direction={direction}
        />
      </div>
    );
  }
}

export default Nearby;
