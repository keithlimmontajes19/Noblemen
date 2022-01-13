import styled from 'styled-components';

export const Container = styled.div``;
export const InputStyled = styled.input`
  border: 1px solid #d8d6de;
  border-radius: 6px;
  height: 70px;
  width: 400px;
`;

export const LabelStyled = styled.span<any>`
  font-family: Raleway;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? props.bold : 'normal')};
  font-size: ${(props) => (props.size ? props.size : '14')}px;
  line-height: 20px;
  color: ;
  ${(props) => (props.color ? props.color : '#5e5873')};
`;
