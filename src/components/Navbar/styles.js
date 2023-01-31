import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;

  @media (max-width: 596px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }

  @media (max-width: 526px) {
    font-size: ${props => props.theme.fontSizes.micro};
  }
`;

export const ListItem = styled.li`
  padding: 0 42px;

  @media (max-width: 964px) {
    padding: 0;
    margin-right: 40px;
    display: ${props => props.active ? 'none' : 'block'};
  }

  @media (max-width: 392px) {
    margin-right: 24px;
  }
`;

export const Item = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  @media (max-width: 476px) {
    font-size: 12px;
    text-decoration: underline;
  }

  &:hover {
    color: ${(props) => props.theme.colors.orange};
    text-decoration: underline;
  }
`;
