/* eslint-disable no-undef */
import axios from 'axios';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { create } from 'react-test-renderer';
import mockData from './mockData.json';
import Nearby from '../components/Nearby.jsx';

const wrapper = mount(<Nearby />);
// const shallowWrapper = shallow(<Nearby />);
jest.mock('axios');

describe('Nearby.jsx component', () => {
  it('Should display "Loading..." prior to fetching data', () => {
    expect(wrapper.text()).toContain('Loading...');
  });

  it('It fetches data with componentDidMount()', async () => {
    const response = { data: mockData };
    axios.get.mockResolvedValue(response);
    const component = create(<Nearby />);
    const instance = component.getInstance();
    await instance.componentDidMount();
    console.log('erreeeeeeeeeeeeee', response);
  });
});
