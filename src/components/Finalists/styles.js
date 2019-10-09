import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 82vh;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
`;

export const Card = styled.div`
  width: 100%;
  background: #eee;
  padding: 20px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  cursor: pointer;

  & + div {
    margin-top: 16px;
  }

  ${props =>
    props.active &&
    css`
      background: green;
      color: #fff;
    `}
`;

export const Vote = styled.button`
  width: 100px;
  height: 50px;
  background: red;
  border: 0;
  margin-top: 10px;
  border-radius: 5px;
  color: white;
`;

export const Content = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  padding: 5px;
`;
