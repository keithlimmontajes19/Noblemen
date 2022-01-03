import {ReactElement} from 'react';

import type {PropsType} from './types';
import {} from './styled';

/* component */
import HomeHeader from 'compositions/HomeHeader';
import HomeContent from 'compositions/HomeContent';

const Home = (props: PropsType): ReactElement => {
  return (
    <div>
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

export default Home;
