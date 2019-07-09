import React from 'react';
import ReactDom from 'react-dom'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel"></div>
    )
  }
}

ReactDOM.render(<Carousel />, document.getElementById('app'));