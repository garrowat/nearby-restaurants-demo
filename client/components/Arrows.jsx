import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


const Arrows = ({ direction, scrollByThree }) => {
  let Arrow;
  let className;
  if (direction === 'left') {
    Arrow = FaChevronLeft;
    className = 'leftArrow';
  } else if (direction === 'right') {
    Arrow = FaChevronRight;
    className = 'rightArrow';
  }
  return (
    <button type="button" className={className} onClick={() => scrollByThree(direction)}><Arrow className="chevron" /></button>
  );
};


export default Arrows;
