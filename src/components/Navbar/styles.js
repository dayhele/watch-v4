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
`;

export const ListItem = styled.li`
  padding: 0 42px;

  @media (max-width: 320px) {
    padding: 0;
    margin-right: 8px;
    display: ${props => props.active ? 'none' : 'block'};
  }
`;

export const Item = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  @media (max-width: 320px) {
    font-size: 12px;
    text-decoration: underline;
  }

  &:hover {
    color: ${(props) => props.theme.colors.orange};
    text-decoration: underline;
  }
`;
