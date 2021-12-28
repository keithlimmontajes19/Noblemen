import {ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';

/* styles and ant design */
import {
  Logostyles,
  LogoContainer,
  MainLayout,
  Siderstyles,
  Headerstyles,
} from './styled';
import {Layout} from 'antd';

/* helpers */
import {MENUS} from 'utils/constants';

/* components */
import Menus from 'components/Menus';
import Logo from 'assets/images/main-logo.png';
import ComponentContent from 'navigations';

const {Header, Sider, Content} = Layout;

const ComponentLayout = (): ReactElement => {
  return (
    <BrowserRouter>
      <Layout style={MainLayout}>
        <Sider style={Siderstyles} width={266}>
          <div style={LogoContainer}>
            <img src={Logo} style={Logostyles} />
          </div>
          <Menus menus={MENUS} />
        </Sider>

        <Layout style={{padding: 21}}>
          <Header style={Headerstyles}>Header</Header>
          <Content>
            <ComponentContent />
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default ComponentLayout;
