import React from 'react';
import {render} from '@testing-library/react-native';
import Mobile from '../Mobile';

describe('Mobile', () => {
  it('Should work as expected', () => {
    const all = render(
        <Mobile />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
