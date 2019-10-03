import styled from "styled-components";

export const Container = styled.div`
  height: 82vh;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow: auto;
`;

export const Card = styled.div`
  width: 100%;
  height: 150px;
  background: #d9e1e3;
  padding: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
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
  height: 30px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  padding: 5px;
`;
