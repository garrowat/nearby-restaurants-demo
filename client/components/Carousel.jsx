import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Slide from './Slide.jsx';
import Arrows from './Arrows.jsx';


const Carousel = ({
  currentDeck, hideRightArrow, hideLeftArrow, scrollByThree,
  position,
}) => {
  const slides = currentDeck.map(slide => <Slide key={slide.id} {...slide} />);

  return (
    <div className="carousel">
      <div className="overflowWrapper">
        <CSSTransitionGroup
          transitionName="scroll"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <span className="slidedeck" key={position}>
            {slides}
          </span>
        </CSSTransitionGroup>
      </div>
      {!hideLeftArrow && <Arrows direction="left" className="leftArrow" scrollByThree={scrollByThree} />}
      {!hideRightArrow && <Arrows direction="right" className="rightArrow" scrollByThree={scrollByThree} />}
    </div>

  );
};


export default Carousel;
