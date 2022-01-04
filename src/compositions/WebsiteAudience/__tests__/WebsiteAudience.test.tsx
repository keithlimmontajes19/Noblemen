import React from 'react';
import {render} from '@testing-library/react-native';
import WebsiteAudience from '../WebsiteAudience';

describe('WebsiteAudience', () => {
  it('Should work as expected', () => {
    const all = render(
        <WebsiteAudience />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
