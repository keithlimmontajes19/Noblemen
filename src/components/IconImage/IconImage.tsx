import {ReactElement} from 'react';

import type {PropsType} from './types';
import {ImageStyled} from './styled';

const IconImage = (props: PropsType): ReactElement => {
  return <ImageStyled {...props} />;
};

export default IconImage;
