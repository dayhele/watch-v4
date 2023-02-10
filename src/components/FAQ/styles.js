import styled from "styled-components";
import Collapsible from "react-collapsible";
import { ButtonSecondary } from "../../styles/GlobalStyles";

export const FAQWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 56px;
`;

export const Title = styled.h3`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700px;
  margin-top: 54px;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
  margin-bottom: 12px;
`;

export const AccordionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .Collapsible__trigger {
    width: 100%;
    min-width: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.orange};
    font-weight: 700;

    &.is-open {
      width: 100%;
      background: ${(props) => props.theme.colors.lightGray};
      padding: 12px 8px;
    }
  }
`;

export const AccordionItem = styled(Collapsible)`
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 8px;
  margin-bottom: 12px;
  background: ${(props) => props.theme.colors.lightGray};
`;

export const AccordionTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
`;

export const AccordionText = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  padding: 8px;
`;

export const FAQTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const FAQText = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 12px;
`;

export const StyledButtonSecondary = styled(ButtonSecondary)`
  margin-bottom: 74px;
`;
