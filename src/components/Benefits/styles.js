import styled from "styled-components";

export const BenefitsWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 128px;
`;

export const BenefitsTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  padding: 40px 0 52px 0;
`;

export const BenefitsIcons = styled.ul`
  width: 100%;
  max-width: 820px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
`;

export const BenefitsText = styled.ul`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.li`
  list-style: none;
`;

export const IconImage = styled.img`
  width: 100px;
  text-align: center;
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
