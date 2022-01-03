import React from 'react';
import {render} from '@testing-library/react-native';
import HomeContent from '../HomeContent';

describe('HomeContent', () => {
  it('Should work as expected', () => {
    const all = render(
        <HomeContent />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
