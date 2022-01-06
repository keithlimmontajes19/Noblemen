import React from 'react';
import {render} from '@testing-library/react-native';
import ForgotForm from '../ForgotForm';

describe('ForgotForm', () => {
  it('Should work as expected', () => {
    const all = render(
        <ForgotForm />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
