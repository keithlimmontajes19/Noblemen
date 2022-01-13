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
import ForgotLogo from 'assets/images/forgot-logo.png';
import ChangePasswordForm from 'compositions/ChangePassword';

const ChangePassword = (): ReactElement => {
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
              <img src={ForgotLogo} style={SublogoStyles} />
            </div>
          </SubLogoContainer>
        </Col>
        <Col span={7}>
          <ChangePasswordForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
