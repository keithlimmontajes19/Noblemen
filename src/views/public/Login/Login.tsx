import {ReactElement, useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/* styles antd */
import {
  Container,
  LogoContainer,
  Logostyles,
  SubLogoContainer,
  SublogoStyles,
  RowContainer,
} from './styled';
import {Row, Col} from 'antd';

/* utils */
import {theme} from 'utils/colors';
import {
  VERIFICATION_ALERT,
  REGISTER_ALERT,
  PASSWORD_CHANGE_ALERT,
  FORGOT_PASSWORD,
} from 'utils/constants';

/* component */
import Logo from 'assets/images/main-logo.png';
import LoginLogo from 'assets/images/login-logo.png';
import LoginForm from 'compositions/LoginForm';

const Login = (): ReactElement => {
  const [type, setType] = useState(null);
  const [details, setDetails] = useState({
    message: '',
    title: '',
  });

  const search = useLocation().search;
  const isVertification = new URLSearchParams(search).get('verification');
  const isRegister = new URLSearchParams(search).get('register');
  const isPasswordChange = new URLSearchParams(search).get('change-password');
  const isForgotPassword = new URLSearchParams(search).get('forgot-password');

  useEffect(() => {
    if (isVertification) {
      setType('verification');
      setDetails({
        message: VERIFICATION_ALERT,
        title: 'Account Verification',
      });
    }

    if (isRegister) {
      setType('register');
      setDetails({
        message: REGISTER_ALERT,
        title: 'Account Registration',
      });
    }

    if (isPasswordChange) {
      setType('change-password');
      setDetails({
        message: PASSWORD_CHANGE_ALERT,
        title: 'Account Password',
      });
    }

    if (isForgotPassword) {
      setType('forgot-password');
      setDetails({
        message: FORGOT_PASSWORD,
        title: 'Forgot Password',
      });
    }
  }, []);

  return (
    <Container>
      <Row gutter={24} style={RowContainer}>
        <Col span={16} style={{background: theme.LOGIN_LAYOUT}}>
          <div style={LogoContainer}>
            <img src={Logo} style={Logostyles} />
          </div>
          <SubLogoContainer>
            <div
              style={{
                alignSelf: 'center',
                marginLeft: 50,
              }}>
              <img src={LoginLogo} style={SublogoStyles} />
            </div>
          </SubLogoContainer>
        </Col>
        <Col span={8}>
          <LoginForm type={type} details={details} />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
