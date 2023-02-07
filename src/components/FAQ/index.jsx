import React from "react";
import * as S from "./styles";
import Collapsible from "react-collapsible";

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
            <p>
              Lorem ipsum dolor sit amet, consectetur...
            </p>
          </S.AccordionItem>
        </S.AccordionWrapper>
      </S.FAQWrapper>
    </>
  );
};

export default FAQ;
