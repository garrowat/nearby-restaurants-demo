import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../components/Carousel.jsx';

const wrapper = shallow(<Carousel />)

describe('DOM render', ()=>{
  it('Should render Carousel to the DOM', () => {
    expect(wrapper.find('.carousel').exists()).toBe(true)
  })
});


