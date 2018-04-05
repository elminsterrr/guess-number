import React from 'react';
import { shallow } from 'enzyme';
import Error from '../';

describe('Error', () => {
  const error = shallow(<Error />);

  it('renders correctly', () => {
    expect(error).toMatchSnapshot();
  });
});
