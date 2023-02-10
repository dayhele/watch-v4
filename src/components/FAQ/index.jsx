import React from "react";
import * as S from "./styles";

const FAQ = () => {
  return (
    <>
      <S.FAQWrapper>
        <S.Title>Ainda com dúvida?</S.Title>
        <S.Description>
          Criamos uma sessão com as respostas para as principais dúvidas.{" "}
        </S.Description>
        <S.AccordionWrapper>
          <S.AccordionItem trigger="Eu preciso estar vinculado a um provedor parceiro da Watch? ">
            <S.AccordionText>
              Lorem ipsum dolor sit amet, consectetur...
            </S.AccordionText>
          </S.AccordionItem>
          <S.AccordionItem trigger="Eu preciso estar vinculado a um provedor parceiro da Watch? ">
            <S.AccordionText>
              Lorem ipsum dolor sit amet, consectetur...
            </S.AccordionText>
          </S.AccordionItem>
          <S.AccordionItem trigger="Eu preciso estar vinculado a um provedor parceiro da Watch? ">
            <S.AccordionText>
              Lorem ipsum dolor sit amet, consectetur...
            </S.AccordionText>
          </S.AccordionItem>
          <S.AccordionItem trigger="Eu preciso estar vinculado a um provedor parceiro da Watch? ">
            <S.AccordionText>
              Lorem ipsum dolor sit amet, consectetur...
            </S.AccordionText>
          </S.AccordionItem>
          <S.FAQTextWrapper>
            <S.FAQText>
              Não encontrou o que procurava? Acesse nossa página de perguntas
              frequentes, lá nós sanamos outras dúvidas, e alguma delas pode ser
              a sua!
            </S.FAQText>
            <S.StyledButtonSecondary>Perguntas frequentes</S.StyledButtonSecondary>
          </S.FAQTextWrapper>
        </S.AccordionWrapper>
      </S.FAQWrapper>
    </>
  );
};

export default FAQ;
