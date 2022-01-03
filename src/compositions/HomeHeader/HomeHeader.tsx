import {ReactElement} from 'react';

import type {PropsType} from './types';
import {Container, StyledBanner} from './styled';

import BANNER from 'assets/images/banner.png';

const HomeHeader = (props: PropsType): ReactElement => {
  return <StyledBanner src={BANNER} />;
};

export default HomeHeader;
