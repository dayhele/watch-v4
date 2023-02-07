import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.black};
  padding: 0 206px;

  @media (max-width: 956px) {
    flex-direction: column;
  }

  @media (max-width: 836px) {
    padding: 0 72px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  margin: 82px 62px 102px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 956px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 912px) {
    margin: 82px 62px 42px 0;
  }
`;

export const MapImage = styled.img`
  max-width: 506px;
  height: fit-content;

  @media (max-width: 982px) {
    width: 320px;
  }

  @media (max-width: 836px) {
    max-width: 256px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 82px;

  @media (max-width: 956px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin-bottom: 18px;
  max-width: 406px;
  text-align: center;
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.sm};
  text-align: justify;
  line-height: 2rem;
  margin-bottom: 46px;
`;

export const FieldTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: 12px;
`;

export const SearchCityWrapper = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SearchCity = styled.input`
  padding: 8px;
  gap: 10px;
  width: 394px;
  height: 32px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.primary};
  margin-bottom: 24px;

  @media (max-width: 548px) {
    width: 100%;
    min-width: 300px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 565px) {
    flex-direction: column;
    align-items: center;
  }
`;
