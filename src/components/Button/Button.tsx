import {ReactElement} from 'react';

import type {PropsType} from './types';
import {StyledButton, StyledText} from './styled';
import {theme} from 'utils/colors';
import Label from 'components/Label';

const Button = (props: PropsType): ReactElement => {
  const {icon, title = '', width = 101} = props;
  return (
    <StyledButton>
      <div>
        <span>{icon && icon}</span>
        <StyledText btnWidth={width}>{title}</StyledText>
      </div>
    </StyledButton>
  );
};

export default Button;
