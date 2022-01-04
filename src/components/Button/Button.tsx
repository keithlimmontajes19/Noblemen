import {ReactElement} from 'react';

import type {PropsType} from './types';
import {StyledButton, StyledText} from './styled';
import {theme} from 'utils/colors';
import Label from 'components/Label';

const Button = (props: PropsType): ReactElement => {
  const {icon, title = ''} = props;

  return (
    <StyledButton {...props}>
      <div>
        <span>{icon && icon}</span>
        <StyledText>{title}</StyledText>
      </div>
    </StyledButton>
  );
};

export default Button;
