import React from 'react';
import {Text} from 'react-native';

import renderer from 'react-test-renderer';

import Header from '../src/components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    renderer.create(<Header />);
  });

  it('renders the correct title', () => {
    const instance = renderer.create(<Header />);
    const textInstance = instance.root.findByType(Text);
    expect(textInstance.props.children).toBe('People');
  });
});
