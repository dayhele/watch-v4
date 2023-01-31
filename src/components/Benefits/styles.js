import styled from "styled-components";

export const BenefitsWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 128px;

  @media (max-width: 320px) {
    padding-bottom: 82px;
  }
`;

export const BenefitsTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  padding: 40px 0 52px 0;
  text-align: center;

  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;

export const BenefitsIcons = styled.ul`
  width: 100%;
  max-width: 820px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;

  @media (max-width: 320px) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 912px) {
    max-width: 510px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const IconContent = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 320px) {
    margin-bottom: 50px;
  }

  @media (max-width: 912px) {
    margin: 24px 46px;
  }
`;

export const IconImage = styled.img`
  width: 100px;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 612px) {
    width: 80px;
  }
`;

export const Text = styled.li`
  list-style: none;
`;

export const TextContent = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  text-align: center;
  width: 180px;
  line-height: 18.75px;
`;
