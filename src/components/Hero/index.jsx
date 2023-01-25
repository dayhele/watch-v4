import React from "react";
import * as S from "./styles";
import Button from "../Button";

const Hero = (props) => {
  return (
    <S.HeroWrapper>
      <S.HeroBanner></S.HeroBanner>
      <S.HeroGradient />
      <S.HeroContent>
        <S.HeroTitle>Dê play nas possibilidades!</S.HeroTitle>
        <S.HeroSubtitle>
          A Watch é o maior e melhor hub de conteúdo, com mais de 11.000 horas
          de entretenimento.
        </S.HeroSubtitle>
      </S.HeroContent>
      <S.ButtonsWrapper>
        <Button variant="primary">EXPLORAR CONTEÚDOS</Button>
        <Button variant="secondary">ENCONTRE UM PROVEDOR</Button>
      </S.ButtonsWrapper>
    </S.HeroWrapper>
  );
};

export default Hero;
