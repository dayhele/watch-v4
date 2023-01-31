import styled from "styled-components";

export const CarouselWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.colors.black};
  padding: 103px 0;
`

export const CarouselTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 32px;

  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;

export const CarouselIcon = styled.img `
  width: 152px;
  margin: 0 8px;

  @media (max-width: 320px) {
    width: 78px;
  }
`
