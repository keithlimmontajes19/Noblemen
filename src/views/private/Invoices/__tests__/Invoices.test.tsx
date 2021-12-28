import React from 'react';
import {render} from '@testing-library/react-native';
import Invoices from '../Invoices';

describe('Invoices', () => {
  it('Should work as expected', () => {
    const all = render(
        <Invoices />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
