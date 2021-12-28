import React from 'react';
import {render} from '@testing-library/react-native';
import Support from '../Support';

describe('Support', () => {
  it('Should work as expected', () => {
    const all = render(
        <Support />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
