import styled from "styled-components";

export const ProvidersWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.lightGray};
  padding: 30px 42px 40px 42px;

  @media (max-width: 956px) {
    margin: 138px 0 0 0;
  }
`;

export const ProvidersTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
  margin: 28px 0;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ProvidersCard = styled.div`
  width: 185px;
  height: 160px;
  background: ${(props) => props.theme.colors.black};
  padding: 14px 26px 20px 26px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

export const TitleCard = styled.h4`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 700;
`;
