import React from 'react';
import {render} from '@testing-library/react-native';
import ChangePassword from '../ChangePassword';

describe('ChangePassword', () => {
  it('Should work as expected', () => {
    const all = render(
        <ChangePassword />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
