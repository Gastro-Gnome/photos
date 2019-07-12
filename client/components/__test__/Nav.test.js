import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from '../Nav';
import sampleData from '../../../database/sampleData';
import { JestEnvironment } from '@jest/environment';

describe('Nav', () => {
  it('passes the clickHandler the correct direction', () => {
    const props = {
      direction: 'nav-right',
      clickHandler: jest.fn(),
    };
    const wrapper = shallow(<Nav {...props} />);
    wrapper.find('div').simulate('click');
    expect(props.clickHandler).toHaveBeenCalled();
    expect(props.clickHandler.mock.calls[0][0]).toEqual('right');
  });

  it('passes the clickHandler the correct direction', () => {
    const props = {
      direction: 'nav-left',
      clickHandler: jest.fn(),
    };
    const wrapper = shallow(<Nav {...props} />);
    wrapper.find('div').simulate('click');
    expect(props.clickHandler).toHaveBeenCalled();
    expect(props.clickHandler.mock.calls[0][0]).toEqual('left');
  });
});
