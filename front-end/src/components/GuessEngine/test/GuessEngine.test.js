import React from 'react';
import { shallow } from 'enzyme';
import GuessEngine from '../';

describe('GuessEngine', () => {
  const guessEngine = shallow(<GuessEngine />);

  it('renders correctly', () => {
    expect(guessEngine).toMatchSnapshot();
  });
});
