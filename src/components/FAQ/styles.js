import styled from "styled-components";
import Collapsible from "react-collapsible";

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
  font-weight: 700px;
  margin-bottom: 12px;
`;

export const AccordionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.lightGray};
  height: 40px;

  .Collapsible__trigger {
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.is-open {
      width: 100%;
      margin: 12px 8px;
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
`;

export const AccordionTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`;
