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
} from './styled';
import {LabelStyled} from 'compositions/WebsiteYou/styled';

/* redux action */
import {useDispatch} from 'react-redux';
import {postSignup} from 'ducks/authentication/actionCreator';

const SignupForm = (): ReactElement => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handlesubmit = () => {
    dispatch(postSignup(payload));
  };

  return (
    <Container>
      <LabelStyled size={22}>
        <b>Adventure starts here 🚀</b>
      </LabelStyled>

      <SubtitledContainer>
        <LabelStyled>Make your app management easy and fun!</LabelStyled>
      </SubtitledContainer>

      <Form layout="vertical">
        <Form.Item label={<LabelStyled>Username</LabelStyled>}>
          <StyledInput
            size="large"
            placeholder="Input Username"
            onChange={(e) => setPayload({...payload, username: e.target.value})}
          />
        </Form.Item>

        <Form.Item label={<LabelStyled>Email</LabelStyled>}>
          <StyledInput
            size="large"
            placeholder="Input Email"
            onChange={(e) => setPayload({...payload, email: e.target.value})}
          />
        </Form.Item>

        <Form.Item label={<LabelStyled>Password</LabelStyled>}>
          <StyledInput
            size="large"
            placeholder="Input Password"
            onChange={(e) => setPayload({...payload, password: e.target.value})}
          />
        </Form.Item>

        <LabelStyled>
          <Checkbox /> I agree to
          <StyledTextlink>
            &nbsp;privacy policy & terms
            {/* <Link to="/forgot"> privacy policy & terms</Link> */}
          </StyledTextlink>
        </LabelStyled>

        <StyledButton size="large" onClick={handlesubmit}>
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
