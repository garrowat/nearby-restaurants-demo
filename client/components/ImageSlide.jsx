import React from 'react'

const ImageSlide = ({url}) => {
  const styles = {
    width: '100px',
    height: '100px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className="imageSlide" style={styles}></div>
  )
}

export default ImageSlide;