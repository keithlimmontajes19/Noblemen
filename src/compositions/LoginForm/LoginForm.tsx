import {ReactElement, useState} from 'react';
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

/* redux actions */
import {useDispatch} from 'react-redux';
import {postLogin} from 'ducks/authentication/actionCreator';

const LoginForm = (): ReactElement => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handlesubmit = () => {
    dispatch(postLogin(credentials));
  };

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

      <Form layout="vertical">
        <Form.Item label={<LabelStyled>Email</LabelStyled>}>
          <StyledInput
            size="large"
            placeholder="Input Email"
            onChange={(e) =>
              setCredentials({...credentials, username: e.target.value})
            }
          />
        </Form.Item>

        <Form.Item label={<LabelStyled>Password</LabelStyled>}>
          <StyledPassword
            size="large"
            placeholder="Input Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) =>
              setCredentials({...credentials, password: e.target.value})
            }
          />
        </Form.Item>

        <LabelStyled>
          <StyledTextlink>
            <Link to="/forgot">Forgot Password?</Link>
          </StyledTextlink>
        </LabelStyled>

        <StyledButton size="large" onClick={handlesubmit}>
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
