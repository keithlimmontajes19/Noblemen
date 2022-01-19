import {ReactElement} from 'react';

import type {PropsType} from './types';
import {InputStyled, LabelStyled} from './styled';
import {Form} from 'antd';

const WebsiteAudience = (props: PropsType): ReactElement => {
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
        name="audience_who_target"
        label={<LabelStyled>Who is your target audience?</LabelStyled>}>
        <InputStyled onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="audience_what_they_care"
        label={<LabelStyled>What do they care about?</LabelStyled>}>
        <InputStyled onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="audience_what_they_need_to_be_seen"
        label={
          <LabelStyled>What do they need to see on your website?</LabelStyled>
        }>
        <InputStyled onChange={onChange} />
      </Form.Item>
    </Form>
  );
};

export default WebsiteAudience;
