import React from 'react';
import $ from 'jquery';
import Slide from './Slide.jsx';
import Arrows from './Arrows.jsx'



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: []
    }
  }

  componentDidMount() {
    this.getNearbies('burgers')
  }

  getNearbies(cat) {
    var data = {category: "burgers"}

    $.ajax({
      url: '/api/nearby',
      method: 'GET',
      contentType: 'application/json',
      data: data,
      error: (err) => {
        console.log(err);
      },
      success: (data) => {
        this.setState({
          carousel: data
        })
      }
    })
  }


  render() {
    return (
      <div className="nearby">
        Others Nearby
        <Arrows direction={'left'}/>
        <div className="carousel">
        {this.state.carousel.map((slide, i) => <Slide key={i} slide={slide}/>)}
        </div>
        <Arrows direction={'right'}/>
      </div>
    )
  }
}

export default Carousel;