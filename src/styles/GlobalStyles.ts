import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

`;

export const ButtonPrimary = styled.button`
  width: fit-content;
  height: 32px;
  background: ${(props) => props.theme.colors.orange};
  padding: 24px;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
  }
`;

export const ButtonSecondary = styled.button`
  width: fit-content;
  height: 32px;
  background: transparent;
  padding: 24px;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 0.1s linear;
    border: 1px solid ${(props) => props.theme.colors.orange};
    color: ${props => props.theme.colors.orange};
  }
`;
