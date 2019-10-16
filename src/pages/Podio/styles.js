import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Card = styled.div`
  width: 100%;
  background: #eee;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

export const Title = styled.div`
  float: left;
`;
export const Size = styled.div`
  float: right;
`;

export const Content = styled.div`
  width: 80%;
  margin-top: 20px;
`;
