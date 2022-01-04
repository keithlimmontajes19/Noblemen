import {ReactElement} from 'react';

import type {PropsType} from './types';
import {InputStyled, LabelStyled} from './styled';
import {Form} from 'antd';

const WebsiteYou = (props: PropsType): ReactElement => {
  return (
    <Form layout="vertical">
      <Form.Item label={<LabelStyled>Tell us about your brand.</LabelStyled>}>
        <InputStyled />
      </Form.Item>
      <Form.Item
        label={
          <LabelStyled>What products or services do you provide?</LabelStyled>
        }>
        <InputStyled />
      </Form.Item>
      <Form.Item
        label={
          <LabelStyled>What sets you apart from your competitors?</LabelStyled>
        }>
        <InputStyled />
      </Form.Item>
    </Form>
  );
};

export default WebsiteYou;
