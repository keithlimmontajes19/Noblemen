import React from 'react';
import {render} from '@testing-library/react-native';
import HomeHeader from '../HomeHeader';

describe('HomeHeader', () => {
  it('Should work as expected', () => {
    const all = render(
        <HomeHeader />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
