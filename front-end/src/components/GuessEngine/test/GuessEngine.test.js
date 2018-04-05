import React from 'react';
import { shallow } from 'enzyme';
import GuessEngine from '../';

describe('GuessEngine', () => {
  const guessEngine = shallow(<GuessEngine />);

  it('renders correctly', () => {
    expect(guessEngine).toMatchSnapshot();
  });

  it('initializes the `state` with result property', () => {
    expect(guessEngine.state().result).toEqual(null);
  });

  it('initializes the `state` with number property', () => {
    expect(guessEngine.state().number).toEqual(null);
  });

  it('initializes the `state` with an empty array of guesses', () => {
    expect(guessEngine.state().guesses).toEqual([]);
  });

  it('initializes the `state` with error property', () => {
    expect(guessEngine.state().error).toEqual(null);
  });
});
