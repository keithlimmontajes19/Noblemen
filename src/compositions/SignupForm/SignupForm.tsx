import {ReactElement, useState} from 'react';
import {Link} from 'react-router-dom';

/* styles antd */
import {Form, Checkbox} from 'antd';
import {
  Container,
  StyledInput,
  StyledButton,
  StyledTextlink,
  SignupContainer,
  SubtitledContainer,
  StyledPassword,
} from './styled';
import {LabelStyled} from 'compositions/WebsiteYou/styled';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

/* redux action */
import {useDispatch} from 'react-redux';
import {postSignup} from 'ducks/authentication/actionCreator';
import {rulesConfig} from 'utils/helpers';

const SignupForm = (): ReactElement => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const INITIAL_VALUES = {
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    password: '',
  };

  const handlesubmit = (values: any) => {
    dispatch(postSignup(values));
  };

  return (
    <Container>
      <LabelStyled size={22}>
        <b>Adventure starts here 🚀</b>
      </LabelStyled>

      <SubtitledContainer>
        <LabelStyled>Make your app management easy and fun!</LabelStyled>
      </SubtitledContainer>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={INITIAL_VALUES}
        onFinish={handlesubmit}>
        <Form.Item
          name="first_name"
          rules={rulesConfig('First name is required.')}
          label={<LabelStyled>First name</LabelStyled>}>
          <StyledInput size="large" placeholder="Input First Name" />
        </Form.Item>

        <Form.Item
          name="last_name"
          rules={rulesConfig('Last name is required.')}
          label={<LabelStyled>Last name</LabelStyled>}>
          <StyledInput size="large" placeholder="Input Last Name" />
        </Form.Item>

        <Form.Item
          name="company_name"
          rules={rulesConfig('Company name is required.')}
          label={<LabelStyled>Company Name</LabelStyled>}>
          <StyledInput size="large" placeholder="Input Company Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={rulesConfig('Email is required.')}
          label={<LabelStyled>Email</LabelStyled>}>
          <StyledInput size="large" placeholder="Input Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={rulesConfig('Password is required.')}
          label={<LabelStyled>Password</LabelStyled>}>
          <StyledPassword
            size="large"
            placeholder="Input Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <LabelStyled>
          <Checkbox /> I agree to
          <StyledTextlink>
            &nbsp;privacy policy & terms
            {/* <Link to="/forgot"> privacy policy & terms</Link> */}
          </StyledTextlink>
        </LabelStyled>

        <StyledButton size="large" onClick={() => form.submit()}>
          Sign Up
        </StyledButton>

        <SignupContainer>
          <LabelStyled> Already have an account?</LabelStyled>
          <LabelStyled>
            <StyledTextlink>
              <Link to="/">Sign in instead</Link>
            </StyledTextlink>
          </LabelStyled>
        </SignupContainer>
      </Form>
    </Container>
  );
};

export default SignupForm;
