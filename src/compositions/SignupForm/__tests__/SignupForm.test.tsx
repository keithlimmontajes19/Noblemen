import React from 'react';
import {render} from '@testing-library/react-native';
import SignupForm from '../SignupForm';

describe('SignupForm', () => {
  it('Should work as expected', () => {
    const all = render(
        <SignupForm />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
