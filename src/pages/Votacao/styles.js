import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  flex-direction: column;
`;

export const CategoryContainer = styled.div`
  margin-top: 150px;
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
  background: #9c7aeb;
  margin-right: 10px;
  border-radius: 50%;
`;

export const CloseVote = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background: none;
`;

export const Error = styled.div`
  width: 100%;
  margin-top: 10px;
  background: #a1a1a1;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: red;
  padding: 7px 5px;
  font-weight: bold;
  min-height: 50px;
  position: absolute;
  top: 0;
`;

export const SaveAll = styled.button`
  width: 80%;
  height: 50px;
  background: green;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 20px;
  font-weight: bold;
  margin-top: 100px;
  @media (max-height: 600px) {
    margin-top: 60px;
  }
`;
