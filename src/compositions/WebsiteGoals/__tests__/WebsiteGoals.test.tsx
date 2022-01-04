import React from 'react';
import {render} from '@testing-library/react-native';
import WebsiteGoals from '../WebsiteGoals';

describe('WebsiteGoals', () => {
  it('Should work as expected', () => {
    const all = render(
        <WebsiteGoals />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
