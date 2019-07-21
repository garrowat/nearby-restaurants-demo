import { MdStarBorder, MdStar, MdChevronRight, MdChevronLeft } from 'react-icons/md';
import styled, { keyframes, css } from 'styled-components';

// Nearby component
const NearbyApp = styled.div`
  display: flex;
  font-family: 'PostMates', 'Helvetica Neue', Helvetica;
  max-width: 100%;
  height: 682px;
  margin: 0 auto;
`;


const Title = styled.h3`
  margin-top: auto;
  font-family: 'PostMatesMed', 'Helvetica Neue', Helvetica;
  font-size: 24px;
  letter-spacing: -0.2px;
`;


const AllInArea = styled.div`
  display: flex;
  margin: auto 0 auto auto;
  letter-spacing: 0.3px;
  font-size: 16px;
  color: #8F95A3;
`;


const NearbyContent = styled.div`
  width: 1024px;
  height: auto;
  padding-left: 36px;
  padding-right: 36px;
  margin: 0 auto;
`;

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

// Carousel component
const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  height: auto;
`;


const SlideDeck = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: visible;
  justify-content: space-between;
  transition: transform 400ms cubic-bezier(0.86,0,0.07,1);
  transform: ${props => props.offset}
`;

const OverflowWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const LeftArrow = styled.button`
  display: flex;
  outline: none;
  position: absolute;
  align-items: center;
  height: 40px;
  width: 40px;
  top: 35%;
  background-color: white;
  cursor: pointer;
  border: 1px solid rgb(217, 219, 224);
  border-radius: 50%;
  left: -26px;
`;

const RightArrow = styled.button`
  display: flex;
  outline: none;
  position: absolute;
  align-items: center;
  height: 40px;
  width: 40px;
  top: 35%;
  background-color: white;
  cursor: pointer;
  border: 1px solid rgb(217, 219, 224);
  border-radius: 50%;
  right: -24px;
`;

const LeftChevron = styled(MdChevronLeft)`
  margin: 0 auto;
  height: 24px;
  width: 24px;
`;

const RightChevron = styled(MdChevronRight)`
  margin: 0 auto;
  height: 24px;
  width: 24px;
`;


// Slide component
const Grow = keyframes`
  0% { transform: scale(1) }
  50% {transform: scale(1.3)}
  100% {transform: scale(1)}
`;

const Favorites = styled.div`
  font-size: 14px;
  font-family: 'PostMates', 'Helvetica Neue', Helvetica;
  font-weight: 400;
  color: #8F95A3;
  padding-top: 5px;
  visibility: hidden;
  `;

const SlideContainer = styled.div`
  flex: 0 0 calc(33.33333% - 0px - 24px);
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
    background-image: url(${props => props.image});
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
  cursor: pointer;
  margin: 15px 10px 165px 270px;
  position: absolute;
  height: 33px;
  width: 33px;
  scale: 1;
  animation: ${props => props.favclicked && css`${Grow}`} 1s cubic-bezier(.62,-0.01,.5,.41) ;
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
  cursor: pointer;
  margin-top: 15px;
  font-size: 18px;
  font-family: 'PostMatesMed', 'Helvetica Neue', Helvetica;
  `;


const Delivery = styled.div`
  font-size: 14px;
  cursor: pointer;
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

export {
AllInArea,
CarouselContainer,
Delivery,
Favorites,
Grow = keyframes`
LeftArrow,
LeftChevron,
NearbyApp,
NearbyContent,
OverflowWrapper,
RestaurantImage,
RightArrow,
RightChevron,
RightChevron,
SlideContainer,
SlideDeck,
SlideInfo,
Star,
StarBack,
StarTwo,
Title,
TopBar,
}