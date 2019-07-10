import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Carousel from '../components/Carousel.jsx';

const wrapper = shallow(<Carousel />)

describe('DOM render', ()=>{
  it('Should render nearby carousel to the DOM', () => {
    expect(wrapper.find('.nearby').exists()).toBe(true)
  });
});


