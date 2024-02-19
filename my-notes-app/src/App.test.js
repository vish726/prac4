import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of notes', () => {
    const wrapper = shallow(<App />);
    const notes = wrapper.find('Note');
    expect(notes.length).toBe(2); // replace with the number of notes you expect
  });

  // add more tests here
});