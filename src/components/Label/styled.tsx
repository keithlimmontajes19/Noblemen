import styled from 'styled-components';

export const StyledLabel = styled.p<any>`
  font-family: 'Raleway', sans-serif;
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.bold};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight}px;
`;
