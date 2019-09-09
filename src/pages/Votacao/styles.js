import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom left, #bdbdbd, #bdbdbd, #9c7aeb);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.div`
  background: white;
  border-radius: 5px;
  height: 40px;
  width: 80%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const ShowCategory = styled.div`
  width: 20px;
  height: 20px;
  background: green;
  margin-right: 10px;
  border-radius: 50%;
`;

export const CloseVote = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background: none;
`;
