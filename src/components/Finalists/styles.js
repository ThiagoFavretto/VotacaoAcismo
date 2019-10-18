import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 75vh;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 50px;
  overflow-y: scroll;
`;

export const Card = styled.div`
  width: 100%;
  background: #eee;
  padding: 20px;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  height: 160px;

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
  width: 65%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  padding: 5px;
`;

export const Foto = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-position: center;

  ${props =>
    css`
      background-image: url(${props.data});
      background-size: 120px;
      background-repeat: no-repeat;
    `}
`;

export const Name = styled.div`
  width: 100%;
  padding: 0 0 0 15px;

  & + div {
    margin-top: 20px;
  }
`;
