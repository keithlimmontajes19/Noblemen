import styled from 'styled-components';
import {Menu} from 'antd';

export const StyledMenus = styled(Menu).attrs((props) => ({
  ...props,
  style: {
    paddingRight: 15,
    paddingLeft: 15,
  },
}))``;

export const StyledMenuItem = styled(Menu.Item).attrs((props: any) => ({
  ...props,
  style: {
    background: props.activecolor,
    borderRadius: 6,
  },
}))``;

export const ItemsStyles = {
  paddingTop: 10,
};
