import {ReactElement} from 'react';

import type {PropsType} from './types';
import {InputStyled, LabelStyled} from './styled';
import {Form} from 'antd';

const WebsiteGoals = (props: PropsType): ReactElement => {
  return (
    <Form layout="vertical">
      <Form.Item
        label={
          <LabelStyled>
            What goal(s) will a new website accomplish for you?
          </LabelStyled>
        }>
        <InputStyled />
      </Form.Item>
      <Form.Item
        label={
          <LabelStyled>
            What other websites accomplish similar goals?
          </LabelStyled>
        }>
        <InputStyled />
      </Form.Item>
      <Form.Item
        label={
          <LabelStyled>What do you like about those websites?</LabelStyled>
        }>
        <InputStyled />
      </Form.Item>
    </Form>
  );
};

export default WebsiteGoals;
