import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
`;

export const Card = styled.div`
  width: 100%;
  background: #eee;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  > div {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #555;
    display: flex;
    justify-content: space-between;
  }

  > span p {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Size = styled.div`
  font-weight: bold;
  white-space: nowrap;
`;

export const Content = styled.span`
  width: 80%;
  margin-top: 20px;
  color: #333;

  & + span {
    margin-top: 5px;
  }
`;
