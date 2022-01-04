import React from 'react';
import {render} from '@testing-library/react-native';
import ModalBrandGuidelines from '../ModalBrandGuidelines';

describe('ModalBrandGuidelines', () => {
  it('Should work as expected', () => {
    const all = render(
        <ModalBrandGuidelines />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
