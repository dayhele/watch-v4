import styled from "styled-components";

// export const NavbarWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

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
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
`;

export const ListItem = styled.li`
  padding: 0 42px;
`;

export const Item = styled.a`
  
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  
  &:hover {
    color: ${(props) => props.theme.colors.orange};
    text-decoration: underline;
  }
`;
