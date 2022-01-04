import React from 'react';
import {render} from '@testing-library/react-native';
import CreativeBrands from '../CreativeBrands';

describe('CreativeBrands', () => {
  it('Should work as expected', () => {
    const all = render(
        <CreativeBrands />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
