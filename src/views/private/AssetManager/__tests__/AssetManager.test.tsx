import React from 'react';
import {render} from '@testing-library/react-native';
import AssetManager from '../AssetManager';

describe('AssetManager', () => {
  it('Should work as expected', () => {
    const all = render(
        <AssetManager />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
