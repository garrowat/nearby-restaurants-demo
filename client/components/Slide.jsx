import React, { Component } from 'react';
import { MdStarBorder, MdStar } from 'react-icons/md';
import $ from 'jquery';
import styled from 'styled-components';

const Favorites = styled.div`
  font-size: 14px;
  font-family: 'PostMates', 'Helvetica Neue', Helvetica;
  font-weight: 400;
  color: #8F95A3;
  padding-top: 5px;
  visibility: hidden;
`;

const SlideContainer = styled.div`
  flex: 0 0 calc(33.33333333333333% - 0px - 24px);
  position: relative;
  margin-left: 36px;
  &:first-child {
    margin-left: 0px;
  };
  &:hover ${Favorites} {
    visibility: visible;
  }
`;

const RestaurantImage = styled.div`
  display: flex;
  position: relative;
  opacity: 1;
  height: auto;
  padding-bottom: 60%;
  &:hover  {
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 28%,rgba(0,0,0,0) 50%,rgba(0,0,0,0) 51%,rgba(0,0,0,0) 61%,rgba(0,0,0,0.41) 97%,rgba(0,0,0,0.41) 98%);
    opacity: 0.4s;
  }
  &:after {
    content: "";
    background-image: url(${props => props.imageURL});
    background-size: cover;
    background-position: center;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const Star = styled(MdStarBorder)`
  color: white;
  margin: 15px 10px 165px 270px;
  position: absolute;
  height: 33px;
  width: 33px;
  &: onclick
`;

const StarBack = styled(MdStar)`
  color: gold;
  margin: 15px 10px 165px 270px;
  position: absolute;
  height: 32px;
  width: 32px;
`;

const SlideInfo = styled.div`
  display: block;
  margin-top: 15px;
  font-size: 18px;
  font-family: 'PostMatesMed', 'Helvetica Neue', Helvetica;
`;


const Delivery = styled.div`
  font-size: 14px;
  font-family: 'PostMates', 'Helvetica Neue', Helvetica;
  font-weight: 400;
  color: #8F95A3;
  padding-top: 10px;
`;


const StarTwo = styled(MdStar)`
  color: gold;
  height: 17px;
  width: 17px;
`;

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteAdded: false,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(favoriteAdded) {
    this.setState({
      favoriteAdded: !favoriteAdded,
    });
  }

  render() {
    const {
      imageURL, name, deliveryEst, favorited, id, addFavorite,
    } = this.props;
    const { favoriteAdded } = this.state;
    return (
      <SlideContainer className="slide">
        <RestaurantImage imageURL={imageURL}>
          { favoriteAdded && <StarBack />}
          <Star favoriteadded={favoriteAdded ? 1 : 0} onClick={() => { addFavorite(id, favoriteAdded); this.toggleFavorite(favoriteAdded); }} />
        </RestaurantImage>
        <SlideInfo>
          {name}
          <Delivery>{`${deliveryEst}-${deliveryEst + 15} min`}</Delivery>
        </SlideInfo>
        { favorited > 0
          ? (
            <Favorites>
              <StarTwo />
              {`${favorited} added to favorites`}
            </Favorites>
          )
          : ' '}
      </SlideContainer>
    );
  }
}

export default Slide;
