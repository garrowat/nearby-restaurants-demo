import React from 'react';
import styled from 'styled-components';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import Slide from './Slide.jsx';

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

const Carousel = ({
  carouselData, hideRightArrow, hideLeftArrow, position,
  getOrder, scrollByThree, offset, direction, addFavorite,
}) => {
  const slides = carouselData.map((slide, index) => (
    <Slide
      key={slide.restaurantId}
      index={index}
      {...slide}
      addFavorite={addFavorite}
    />
  ));

  return (
    <CarouselContainer>
      <OverflowWrapper>
        <SlideDeck direction={direction} offset={offset}>{slides}</SlideDeck>
      </OverflowWrapper>

      {!hideLeftArrow
      && (
      <LeftArrow className="leftArrow" dir="left" onClick={() => scrollByThree('left')}>
        <LeftChevron />
      </LeftArrow>
      )}
      {!hideRightArrow && (
      <RightArrow className="rightArrow" dir="right" onClick={() => scrollByThree('right')}>
        <RightChevron />
      </RightArrow>
      )}
    </CarouselContainer>

  );
};


export default Carousel;
