import styled, { keyframes } from "styled-components";

const SlideBottom = keyframes`
0% {
  top: 100%;

}
100% {
  top: 0;
}
`;
export const Container = styled.div`
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: blue;
  animation: ${SlideBottom} 0.3s linear 0s;
`;
export const Header = styled.div`
  display: flex;
  height: 8vh;
`;

export const Close = styled.div`
  position: absolute;
  right: 0;
`;
export const Title = styled.div`
  line-height: 3;
`;
