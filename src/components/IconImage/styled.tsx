import styled from 'styled-components';

export const Container = styled.div``;
export const ImageStyled = styled.img.attrs<any>((props) => ({
  src: props.source,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
