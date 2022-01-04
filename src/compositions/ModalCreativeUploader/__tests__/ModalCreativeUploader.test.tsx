import React from 'react';
import {render} from '@testing-library/react-native';
import ModalCreativeUploader from '../ModalCreativeUploader';

describe('ModalCreativeUploader', () => {
  it('Should work as expected', () => {
    const all = render(
        <ModalCreativeUploader />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
