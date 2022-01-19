import {ReactElement} from 'react';

import type {PropsType} from './types';
import {InputStyled, LabelStyled} from './styled';
import {Form} from 'antd';

const WebsiteGoals = (props: PropsType): ReactElement => {
  const {setInitialValues, initialValues} = props;

  const onChange = (e: any) => {
    setInitialValues({
      ...initialValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Form layout="vertical">
      <Form.Item
        name="goal_what_accomplish_new_website"
        label={
          <LabelStyled>
            What goal(s) will a new website accomplish for you?
          </LabelStyled>
        }>
        <InputStyled onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="goal_what_accomplish_similar_goals"
        label={
          <LabelStyled>
            What other websites accomplish similar goals?
          </LabelStyled>
        }>
        <InputStyled onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="goal_what_do_you_like_about_website"
        label={
          <LabelStyled>What do you like about those websites?</LabelStyled>
        }>
        <InputStyled onChange={onChange} />
      </Form.Item>
    </Form>
  );
};

export default WebsiteGoals;
