import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom left, #8eab8a, #8eab8a, #9c7aeb);
`;

export const FormCode = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: 500px) {
    max-width: 400px;
    padding: 0;
  }
`;
export const EnterCode = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  height: 50px;
  font-size: 18px;
  padding: 0 20px;
  color: #666;
  border-radius: 8px;
`;

export const Background = styled.img`
  width: 100%;
  height: 200px;
  bottom: 0;
  position: absolute;
`;

export const LogoContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Logo = styled.img`
  width: 350px;
  padding: 10px;
  @media (min-width: 500px) {
    width: 100%;
  }
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
