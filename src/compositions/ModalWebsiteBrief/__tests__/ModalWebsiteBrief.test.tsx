import React from 'react';
import {render} from '@testing-library/react-native';
import ModalWebsiteBrief from '../ModalWebsiteBrief';

describe('ModalWebsiteBrief', () => {
  it('Should work as expected', () => {
    const all = render(
        <ModalWebsiteBrief />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
