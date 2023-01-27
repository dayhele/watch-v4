import styled from "styled-components";

export const BannersWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: ${(props) => props.theme.colors.blue};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  width: 70%;
  padding: 70px 188px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerWrapper = styled.div`
  width: 100%;
`;

export const ParamountBannerImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ParamountIcon = styled.img`
  width: 228px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 344px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.fadedBlue} 23.14%,
    rgba(0, 101, 255, 0) 88.23%
  );
`;

export const TextWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 66px 0 0 103px;
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
  padding-bottom: 66px;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: 38.41px;
  font-weight: 400;
  text-align: justify;
`;

export const Dot = styled.button`
  background: ${(props) => props.theme.colors.white};
  opacity: 0.2;
  border: none;
  width: 32px;
  height: 4px;
  border-radius: 16px;
  margin: 0 5px;
  padding: 2px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.active {
    background: ${(props) => props.theme.colors.white};
    opacity: 1;
  }
`;

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  height: 38px;
`;
