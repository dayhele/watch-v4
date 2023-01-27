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
`;

export const HeroGradient = styled.div`
  width: 100%;
  background: linear-gradient(0deg, #1e1e22 36.36%, rgba(30, 30, 34, 0) 88.23%);
  position: absolute;
  top: 446px;
  height: 256px;
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
`;

export const HeroSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  max-width: 535px;
  padding-bottom: 32px;
`;

export const ButtonsWrapper = styled.div`
  margin: 0 auto;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 528px;
`;
