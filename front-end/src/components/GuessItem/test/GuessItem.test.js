import React from 'react';
import { shallow } from 'enzyme';
import GuessItem from '../';

describe('GuessItem', () => {
  const guessItem = shallow(<GuessItem />);

  it('renders correctly', () => {
    expect(guessItem).toMatchSnapshot();
  });
});
