import {ReactElement} from 'react';
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
} from './styled';
import {LabelStyled} from 'compositions/WebsiteYou/styled';
import {ChevronLeft} from 'react-feather';
import {rulesConfig} from 'utils/helpers';

import {useDispatch} from 'react-redux';
import {forgotPassword} from 'ducks/authentication/actionCreator';

/* redux actions */
const ForgotForm = (): ReactElement => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const handlesubmit = (values: any) => {
    dispatch(forgotPassword(values));
  };

  return (
    <Container>
      <LabelStyled size={22}>
        <b>Forgot Password? 🔒</b>
      </LabelStyled>

      <SubtitledContainer>
        <LabelStyled>
          Enter your email and we'll send you instructions to reset your
          password
        </LabelStyled>
      </SubtitledContainer>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={handlesubmit}
        initialValues={{
          email: '',
        }}>
        <Form.Item
          rules={rulesConfig()}
          name="email"
          label={<LabelStyled>Email</LabelStyled>}>
          <StyledInput placeholder="Input Email" size="large" />
        </Form.Item>

        <StyledButton size="large" onClick={() => form.submit()}>
          Send reset link
        </StyledButton>

        <SignupContainer>
          <LabelStyled>
            <StyledTextlink>
              <Link to="/">
                <ChevronLeft size={15} style={{marginTop: -4}} /> Back to Login
              </Link>
            </StyledTextlink>
          </LabelStyled>
        </SignupContainer>
      </Form>
    </Container>
  );
};

export default ForgotForm;
