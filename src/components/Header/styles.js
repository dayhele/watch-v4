import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 65px;
  padding: 0 56px;
  display: flex;
  align-items: center;

  @media (max-width: 596px) {
    padding: 0 0 0 24px;
  }
`;

export const Logo = styled.img`
  width: 133px;
  margin-right: 54px;

  @media (max-width: 596px) {
    width: 82px;
    margin-right: 32px;
  }
`;
