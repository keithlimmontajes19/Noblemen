import {ReactElement} from 'react';

import type {PropsType} from './types';
import {InputStyled, LabelStyled} from './styled';
import {Form} from 'antd';

const WebsiteYou = (props: PropsType): ReactElement => {
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
        name="you_tell_the_brand"
        label={<LabelStyled>Tell us about your brand.</LabelStyled>}>
        <InputStyled onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="you_what_products_service"
        label={
          <LabelStyled>What products or services do you provide?</LabelStyled>
        }>
        <InputStyled onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="you_what_apart_competitors"
        label={
          <LabelStyled>What sets you apart from your competitors?</LabelStyled>
        }>
        <InputStyled onChange={onChange} />
      </Form.Item>
    </Form>
  );
};

export default WebsiteYou;
