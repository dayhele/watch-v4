import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 65px;
  padding: 0 56px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 133px;
  margin-right: 54px;
`;

