import {ReactElement, useEffect} from 'react';
import {Link} from 'react-router-dom';

/* styles antd */
import {Form} from 'antd';
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

/* redux actions helpers */
import {useSelector, useDispatch} from 'react-redux';
import {postLogin} from 'ducks/authentication/actionCreator';
import {RootState} from 'ducks/store';
import {rulesConfig} from 'utils/helpers';

const LoginForm = (): ReactElement => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const {data}: any = useSelector<RootState>((state) => state.authentication);

  const handlesubmit = (values: any) => {
    dispatch(postLogin(values));
  };

  const setFormFields = (field: string, errors: string) => {
    form.setFields([
      {
        name: field,
        errors: [errors],
      },
    ]);
  };

  useEffect(() => {
    const email = form.getFieldValue('email');
    const password = form.getFieldValue('password');

    if (data?.code === 109 && email.length) {
      setFormFields('email', data?.message);
    }

    if (data?.code === 108 && password.length) {
      setFormFields('password', data?.message);
    }
  }, [data]);

  return (
    <Container>
      <LabelStyled size={22}>
        <b>Welcome to Noblemen 👋</b>
      </LabelStyled>

      <SubtitledContainer>
        <LabelStyled>
          Please sign-in to your account and start the adventure
        </LabelStyled>
      </SubtitledContainer>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handlesubmit}
        initialValues={{
          email: '',
          password: '',
        }}>
        <Form.Item
          name="email"
          rules={rulesConfig('Email is required.')}
          label={<LabelStyled>Email</LabelStyled>}>
          <StyledInput
            type="email"
            size="large"
            placeholder="Input Email"
            onChange={() => setFormFields('email', '')}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={rulesConfig('Password is required.')}
          label={<LabelStyled>Password</LabelStyled>}>
          <StyledPassword
            size="large"
            placeholder="Input Password"
            onChange={() => setFormFields('password', '')}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <LabelStyled>
          <StyledTextlink>
            <Link to="/forgot">Forgot Password?</Link>
          </StyledTextlink>
        </LabelStyled>

        <StyledButton size="large" onClick={() => form.submit()}>
          Sign In
        </StyledButton>

        <SignupContainer>
          <LabelStyled>New on our platform?</LabelStyled>
          <LabelStyled>
            <StyledTextlink>
              <Link to="/signup">Create an account</Link>
            </StyledTextlink>
          </LabelStyled>
        </SignupContainer>
      </Form>
    </Container>
  );
};

export default LoginForm;
