import {ReactElement} from 'react';

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
import {theme} from 'utils/colors';

/* component */
import Logo from 'assets/images/main-logo.png';
import SignupLogo from 'assets/images/signup-logo.png';
import SignupForm from 'compositions/SignupForm';

const Signup = (): ReactElement => {
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
              <img src={SignupLogo} style={SublogoStyles} />
            </div>
          </SubLogoContainer>
        </Col>
        <Col span={7}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
