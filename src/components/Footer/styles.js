import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 56px 32px 56px;
`;

export const Divisor = styled.hr`
  width: 90%;
  margin: 0 auto 42px auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CopyrightAdvice = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.micro};
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
  max-width: 828px;
`;

export const LogoFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const WatchLogo = styled.img`
  width: 135px;
  padding-bottom: 20px;
`;

export const WatchCopyright = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.micro};
  color: ${(props) => props.theme.colors.white};
  font-weight: 300;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 224px;
  justify-content: start;
  align-items: start;
  margin-top: 32px;
`;

export const SocialIcon = styled.img`
  width: 32px;
  margin-right: 32px;
`;

export const StoresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 376px;
  justify-content: start;
  align-items: start;
  margin-top: 32px;
`;

export const StoreIcon = styled.img`
  width: 144px;
  margin-right: 32px;
`;