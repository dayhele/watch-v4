import styled from "styled-components";
import BannerContent from "../../assets/img/banner-watch-content.svg";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url(${BannerContent});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center top;
  height: 514px;
  margin: 0 auto;

  @media (max-width: 912px) {
    flex-direction: column;
    background-size: inherit;
    height: auto;
  }
`;

export const ContentText = styled.div`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  margin: 22px 28px 132px 112px;

  @media (max-width: 912px) {
    justify-content: center;
    margin: 52px 0 28px 16px;
  }
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 26px;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 22px;
`;

export const CarouselWrapper = styled.div`
  width: 50%;
  margin-bottom: 102px;
`;

export const CarouselCard = styled.div`
  min-width: 50%;
  width: 208px;
  height: 208px;
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 8px;
  display: flex;

  @media (max-width: 912px) {
    width: 73px;

  }
`;
