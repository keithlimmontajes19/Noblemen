import styled from 'styled-components';
import {theme} from 'utils/colors';

export const Container = styled.div``;

export const StyledTitle = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: ${theme.BLACK};
`;

export const SyledSubtitle = styled.p`
  font-family: Didact Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  margin-top: -20px;
  text-align: center;
  color: ${theme.ICONS};
`;

export const IconContainer = styled.div`
  height: 38px;
  width: 38px;
  background: #7890ff;
  border-radius: 6px;
  padding: 7px;
`;

export const IconTitle = styled.p`
  font-family: Didact Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #4561e1;
  margin-left: 12px;
`;

export const IconSubtitle = styled.p`
  font-family: Didact Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #b9b9c3;
`;
