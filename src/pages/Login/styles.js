import styled from 'styled-components';
import trofeu from '../../assets/trofeu.png';
import logo2 from '../../assets/logo2.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${trofeu});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-bottom: 20px;

  @media (min-width: 600px) {
    background-image: url(${logo2});
  }
`;

export const FormCode = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: auto;

  @media (min-width: 500px) {
    max-width: 400px;
    padding: 0;
  }
  bottom: 0;
`;
export const EnterCode = styled.input`
  margin-top: 10px;
  border: 1px solid #ddd;
  height: 50px;
  font-size: 18px;
  padding: 0 20px;
  color: #666;
  border-radius: 8px;
`;

export const ButtonCode = styled.button`
  height: 50px;
  border: 0;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  background: #2e5441;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 4px 4px rgba(0, 20, 0, 0.3);

  &:hover {
    background: #314d3f;
  }

  &:active {
    position: relative;
    top: 3px;
    box-shadow: none;
  }
`;

export const Error = styled.div`
  margin-top: 10px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  color: red;
  padding: 7px 5px;
  min-height: 50px;
`;
