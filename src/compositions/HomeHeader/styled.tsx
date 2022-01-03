import styled from 'styled-components';

export const Container = styled.div``;

export const StyledBanner = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  object-fit: cover;
  height: 100%;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 33px;
`;
