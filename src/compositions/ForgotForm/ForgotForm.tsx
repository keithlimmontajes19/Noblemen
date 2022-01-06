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

/* redux actions */
const ForgotForm = (): ReactElement => {
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

      <Form layout="vertical">
        <Form.Item label={<LabelStyled>Email</LabelStyled>}>
          <StyledInput placeholder="Input Email" size="large" />
        </Form.Item>

        <StyledButton size="large">Send reset link</StyledButton>

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
