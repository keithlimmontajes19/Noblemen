import styled from 'styled-components';

export const Container = styled.div``;
export const StyledButton = styled.button<any>`
  background: #7890ff;
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border-color: #7890ff;
  padding: 5px;
  width: ${(props) => props.width}px;
`;

export const StyledText = styled.span<any>`
  font-family: Didact Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin-left: 8px;
`;
