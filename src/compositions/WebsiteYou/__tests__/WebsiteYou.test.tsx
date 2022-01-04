import React from 'react';
import {render} from '@testing-library/react-native';
import WebsiteYou from '../WebsiteYou';

describe('WebsiteYou', () => {
  it('Should work as expected', () => {
    const all = render(
        <WebsiteYou />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
