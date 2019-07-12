import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';
import sampleData from '../../../database/sampleData';

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve(sampleData));
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has a function called scoll that increments and decrements the currentPhoto property in state', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ photos: sampleData });
    const instance = wrapper.instance();
    expect(wrapper.state().currentPhoto).toEqual(0);
    instance.scroll('right');
    expect(wrapper.state().currentPhoto).toEqual(1);
    instance.scroll('left');
    expect(wrapper.state().currentPhoto).toEqual(0);
    instance.scroll('left');
    expect(wrapper.state().currentPhoto).toEqual(0);
    wrapper.setState({ currentPhoto: sampleData.length });
    instance.scroll('right');
    expect(wrapper.state().currentPhoto).toEqual(sampleData.length);
  });
});
