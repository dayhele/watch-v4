import styled from "styled-components";

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
`;

export const ButtonSecondary = styled.button `
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
`
