import styled from "styled-components";

export const ProvidersWrapper = styled.p`
  width: 100%;
  height: 285px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.lightGray};
  padding: 30px auto 40px auto;
`;

export const ProvidersTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
  margin: 28px 0;
`;

export const CarouselWrapper = styled.div`
  width: 1000px;
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
