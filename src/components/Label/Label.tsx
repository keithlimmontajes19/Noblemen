import {ReactElement} from 'react';

import type {PropsType} from './types';
import {StyledLabel} from './styled';

const Label = (props: PropsType): ReactElement => {
  const {
    children,
    bold = 400,
    size = 12,
    lineHeight = 18,
    color = 'black',
  } = props;

  return (
    <StyledLabel bold={bold} size={size} color={color} lineHeight={lineHeight}>
      {children}
    </StyledLabel>
  );
};

export default Label;
