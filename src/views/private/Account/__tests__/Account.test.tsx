import React from 'react';
import {render} from '@testing-library/react-native';
import Account from '../Account';

describe('Account', () => {
  it('Should work as expected', () => {
    const all = render(
        <Account />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
