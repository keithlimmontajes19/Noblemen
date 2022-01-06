import {ReactElement} from 'react';

import type {PropsType} from './types';

/* styles and ant design */
import {
  Logostyles,
  LogoContainer,
  MainLayoutStyles,
  Siderstyles,
} from './styled';
import {Layout} from 'antd';

/* helpers */
import {MENUS} from 'utils/constants';

/* components */
import Menus from 'components/Menus';
import Logo from 'assets/images/main-logo.png';
import ComponentHeader from 'components/Header';
import NavigationContent from 'navigations/privateRoute';

const {Sider, Content} = Layout;

const MainLayout = (props: PropsType): ReactElement => {
  return (
    <Layout style={MainLayoutStyles}>
      <Sider style={Siderstyles} width={266}>
        <div style={LogoContainer}>
          <img src={Logo} style={Logostyles} />
        </div>
        <Menus menus={MENUS} />
      </Sider>
      <Layout style={{padding: 21}}>
        <ComponentHeader />
        <Content>
          <NavigationContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
