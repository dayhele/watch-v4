import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  margin: 0 16px 12px 16px;
  flex-wrap: nowrap;
`;

export const Card = styled.div`
  min-width: 208px;
  height: 288px;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 22px;
  margin: 28px 28px 0 0;
  border-radius: 8px;

  &:hover {
    transition: all 0.2s;
    border: 4px solid ${props => props.theme.colors.orange};
  }
`;
