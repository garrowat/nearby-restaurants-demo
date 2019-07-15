import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const SlideContainer = styled.div`
  flex-shrink: 0;
  width: 317px;
  height: 257px;
  margin-left: ${(props) => { if (props.order > 0) { return '36px'; } return '0px'; }};
  order: ${props => props.order};
`;

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
  }


  render() {
    const { imageURL, getOrder, index } = this.props;
    const img = {
      backgroundImage: `url(${imageURL})`,
    };
    return (
      <SlideContainer className="slide" order={getOrder(index)}>
        <div className="image" style={img} />
        <div className="slideInfo">Name Est Del</div>
      </SlideContainer>
    );
  }
}

export default Slide;
