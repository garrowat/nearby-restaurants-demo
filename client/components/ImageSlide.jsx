import React from 'react'

const ImageSlide = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  <div className="imageSlide" style={styles}></div>
}