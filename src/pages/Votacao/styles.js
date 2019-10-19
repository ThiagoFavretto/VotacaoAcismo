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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  p {
    white-space: nowrap;
    font-size: 12px;
    margin-left: auto;
    color: green;
    font-weight: bold;
  }
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

export const ConfimerButton = styled.button`
  height: 50px;
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
  opacity: ${props => (props.disabled ? 0.7 : 1)};
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const Final = styled.div`
  background: #eee;
  width: 60px;
`;
