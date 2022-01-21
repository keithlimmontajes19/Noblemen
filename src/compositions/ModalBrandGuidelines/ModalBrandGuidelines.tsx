import {ReactElement} from 'react';

import type {PropsType} from './types';
import {} from './styled';
import {Modal, Row, Col} from 'antd';
import {theme} from 'utils/colors';

const ModalBrandGuidelines = (props: PropsType): ReactElement => {
  const {visible, setVisible} = props;
  return (
    <Modal
      width={800}
      // Default false not yet done with the flow
      visible={false}
      footer={false}
      centered={true}
      closable={false}
      onCancel={() => setVisible(false)}
      maskStyle={{background: theme.MODAL}}>
      3
    </Modal>
  );
};

export default ModalBrandGuidelines;
