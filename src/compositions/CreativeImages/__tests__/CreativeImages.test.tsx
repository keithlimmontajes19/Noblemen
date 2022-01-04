import React from 'react';
import {render} from '@testing-library/react-native';
import CreativeImages from '../CreativeImages';

describe('CreativeImages', () => {
  it('Should work as expected', () => {
    const all = render(
        <CreativeImages />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
