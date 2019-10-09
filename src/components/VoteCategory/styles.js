import styled, { keyframes } from 'styled-components';

const SlideBottom = keyframes`
0% {
  top: 100%;

}
100% {
  top: 10%;
}
`;
export const Container = styled.div`
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  animation: ${SlideBottom} 0.3s linear 0s;
  border-radius: 20px 20px 0 0;
`;
export const Header = styled.div`
  display: flex;
  height: 55px;
  padding: 0 20px;
  align-items: center;
`;

export const Close = styled.div`
  position: absolute;
  right: 0;
`;
export const Title = styled.div`
  font-size: 18px;
`;
