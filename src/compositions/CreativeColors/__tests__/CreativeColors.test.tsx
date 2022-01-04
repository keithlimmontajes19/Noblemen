import React from 'react';
import {render} from '@testing-library/react-native';
import CreativeColors from '../CreativeColors';

describe('CreativeColors', () => {
  it('Should work as expected', () => {
    const all = render(
        <CreativeColors />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
