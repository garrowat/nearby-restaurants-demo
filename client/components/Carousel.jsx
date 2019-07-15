import React from 'react';
import styled, { css } from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Slide from './Slide.jsx';

const SlideDeck = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: ${props => (!props.scrolling ? 'none' : 'transform 500ms cubic-bezier(.42,0,1,1)')};
  transform: ${(props) => { if (props.scrolling) { if (props.direction === 'right') { return 'translateX(calc(-100% + -36px))'; } if (props.direction === 'left') { return 'translateX(calc(+100% + 36px))'; } } return 'translateX(0%)'; }};
`;


const Arrow = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  height: 40px;
  width: 40px;
  top: 35%;
  background-color: white;
  cursor: pointer;
  border: 1px solid rgb(217, 219, 224);
  border-radius: 50%;

`;

const LeftChevron = styled(FaChevronLeft)`
  margin: 0 auto;
  height: 15px;
  width: 15px;
`;

const RightChevron = styled(FaChevronRight)`
  margin: 0 auto;
  height: 15px;
  width: 15px;
`;

const Carousel = ({
  currentDeck, hideRightArrow, hideLeftArrow, position,
  getOrder, scrollByThree, scrolling, direction,
}) => {
  const slides = currentDeck.map((slide, index) => <Slide key={slide.id} index={index} {...slide} getOrder={getOrder} scrollByThree={scrollByThree} />);

  console.log('preeeps', scrolling);
  return (
    <div className="carousel">
      <div className="overflowWrapper">
        <SlideDeck scrolling={scrolling} direction={direction}>{slides}</SlideDeck>
      </div>
      {!hideLeftArrow && <Arrow className="leftArrow" dir="left" onClick={() => scrollByThree('left')}><LeftChevron /></Arrow>}
      {!hideRightArrow && <Arrow className="rightArrow" dir="right" onClick={() => scrollByThree('right')}><RightChevron /></Arrow>}
    </div>

  );
};


export default Carousel;
