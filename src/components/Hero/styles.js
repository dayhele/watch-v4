import styled from "styled-components";
import Banner from "../../assets/img/banner.jpg";

export const HeroWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.black};
`;

export const HeroBanner = styled.div`
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center top;
  height: 565px;

  @media (max-width: 712px) {
    height: 382px;
  }

  @media (max-width: 586px) {
    height: 320px;
  }

  @media (max-width: 446px) {
    height: 280px;
  }

  @media (max-width: 320px) {
    height: 186px;
  }
`;

export const HeroGradient = styled.div`
  width: 100%;
  background: linear-gradient(0deg, #1e1e22 36.36%, rgba(30, 30, 34, 0) 88.23%);
  position: absolute;
  top: 446px;
  height: 256px;

  @media (max-width: 320px) {
    top: 166px;
    height: 100px;
  }

  @media (max-width: 762px) {
    top: 297px;
    height: 178px;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
  position: relative;
`;

export const HeroTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 12px;

  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  @media (max-width: 765px) {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: 700;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  max-width: 535px;
  padding-bottom: 32px;

  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: 700;
    padding-bottom: 20px;
  }

  @media (max-width: 765px) {
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: 400;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 0 auto;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 528px;

  @media (max-width: 675px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
