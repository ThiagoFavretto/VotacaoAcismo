import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 82vh;
  flex-direction: column;
  padding: 20px;
  background: #fff;
`;

export const ConfimerButton = styled.button`
  height: 50px;
  border: 0;
  margin-top: auto;
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
  padding: 20px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  cursor: pointer;

  & + div {
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
`;
