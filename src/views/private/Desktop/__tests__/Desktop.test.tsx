import React from 'react';
import {render} from '@testing-library/react-native';
import Desktop from '../Desktop';

describe('Desktop', () => {
  it('Should work as expected', () => {
    const all = render(
        <Desktop />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
