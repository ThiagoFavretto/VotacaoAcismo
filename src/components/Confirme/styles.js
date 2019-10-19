import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 75vh;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 60px;
  overflow-y: scroll;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const ConfimerButton = styled.button`
  height: 50px;
  margin-bottom: 40px;
  width: 80%;
  border: 0;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  background: #2e5441;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 4px 4px rgba(0, 20, 0, 0.3);
  ${props =>
    !props.alreadyVotted &&
    css`
      &:hover {
        background: #314d3f;
      }
      &:active {
        position: relative;
        top: 3px;
        box-shadow: none;
      }
    `}
`;

export const Card = styled.div`
  width: 100%;
  background: green;
  color: #fff;
  padding: 10px;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  /* height: 160px; */

  & + div {
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  width: 65%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Foto = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-position: center;

  ${props =>
    css`
      background-image: url(${props.data});
      background-size: 100% 100%;
    `}
`;

export const Name = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 0 0 0 15px;
`;
