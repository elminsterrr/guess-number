import React from 'react';
import { shallow } from 'enzyme';
import Success from '../';

describe('Success', () => {
  const success = shallow(<Success />);

  it('renders correctly', () => {
    expect(success).toMatchSnapshot();
  });
});
