import {ReactElement} from 'react';
import type {PropsType} from './types';

/* styles antd coreUI*/
import {theme} from 'utils/colors';
import {Headerstyles} from './styled';
import {Layout, Badge} from 'antd';
import {CAvatar} from '@coreui/react';
import {Bell, User} from 'react-feather';

const {Header} = Layout;

const ComponentHeader = (props: PropsType): ReactElement => {
  return (
    <Header style={Headerstyles}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}>Good morning, John</div>
        <div style={{marginRight: 17}}>
          <Badge count={4} size="small">
            <Bell size={18} color={theme.ICONS} />
          </Badge>
        </div>

        <div>
          <CAvatar color="secondary" textColor="white" status="success">
            <User size={20} color={theme.WHITE} />
          </CAvatar>
        </div>
      </div>
    </Header>
  );
};

export default ComponentHeader;
