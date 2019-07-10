import React from 'react'
import {FaChevronRight} from 'react-icons/fa';
import {FaChevronLeft} from 'react-icons/fa';

const Arrows = ({direction, onClick}) => {
  let Arrow;
  if (direction === 'left') {
    Arrow = FaChevronRight ;
  } else if (direction === 'right'){
    Arrow = FaChevronLeft;
  };
  return (
    <div className="arrow"><Arrow /></div>
  )
}


export default Arrows;