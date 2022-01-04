import {ReactElement} from 'react';

import type {PropsType} from './types';
import {InputStyled, LabelStyled} from './styled';
import {Form} from 'antd';

const WebsiteAudience = (props: PropsType): ReactElement => {
  return (
    <Form layout="vertical">
      <Form.Item
        label={<LabelStyled>Who is your target audience?</LabelStyled>}>
        <InputStyled />
      </Form.Item>
      <Form.Item label={<LabelStyled>What do they care about?</LabelStyled>}>
        <InputStyled />
      </Form.Item>
      <Form.Item
        label={
          <LabelStyled>What do they need to see on your website?</LabelStyled>
        }>
        <InputStyled />
      </Form.Item>
    </Form>
  );
};

export default WebsiteAudience;
