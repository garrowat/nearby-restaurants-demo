import React from 'react'

class Slide extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log('Image URL', this.props)
    const styles = {
      backgroundImage: `url(${this.props.slide.imageURL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  return (
    <div className="slide" style={styles}>

    </div>
  )
  }
}

export default Slide;