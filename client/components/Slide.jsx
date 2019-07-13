import React, { Component } from 'react';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
  }


  render() {
    const { imageURL } = this.props;
    const img = {
      backgroundImage: `url(${imageURL})`,
    };
    return (
      <div className="slide">
        <div className="image" style={img} />
        <div className="slideInfo">Name Est Del</div>
      </div>
    );
  }
}

export default Slide;
