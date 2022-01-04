import {ReactElement, useState} from 'react';

import type {PropsType} from './types';
import {} from './styled';

/* component */
import HomeHeader from 'compositions/HomeHeader';
import HomeContent from 'compositions/HomeContent';
import ModalComponent from 'compositions/ModalWebsiteBrief';
import ModalCreativeUploader from 'compositions/ModalCreativeUploader';
import ModalBrandGuidelines from 'compositions/ModalBrandGuidelines';

const Home = (props: PropsType): ReactElement => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <div>
      <HomeHeader />
      <HomeContent
        setVisible={setVisible1}
        setVisible2={setVisible2}
        setVisible3={setVisible3}
      />
      <ModalComponent visible={visible1} setVisible={setVisible1} />
      <ModalCreativeUploader visible={visible2} setVisible={setVisible2} />
      <ModalBrandGuidelines visible={visible3} setVisible={setVisible3} />
    </div>
  );
};

export default Home;
