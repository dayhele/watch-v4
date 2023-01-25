import React from "react";
import * as S from "./styles";
import ContentIcon from "../../assets/img/benefits-icon-1.svg";
import ScreensIcon from "../../assets/img/benefits-icon-2.svg";
import RentIcon from "../../assets/img/benefits-icon-3.svg";
import KidsIcon from "../../assets/img/benefits-icon-4.svg";

const Benefits = () => {
  return (
    <>
      <S.BenefitsWrapper>
        <S.BenefitsTitle>Vantagens em ter Watch!</S.BenefitsTitle>
        <S.BenefitsIcons>
          <S.Icon src={ContentIcon} />
          <S.Icon src={ScreensIcon} />
          <S.Icon src={RentIcon} />
          <S.Icon src={KidsIcon} />
        </S.BenefitsIcons>
        <S.BenefitsText>
          <S.Text>
            Mais de 11.000 horas distribuídas entre séries, filmes, realities,
            desenhos animados e muito mais.{" "}
          </S.Text>
          <S.Text>
            Possibilidade de assistir em 8 perfis e até 4 telas simultâneas.{" "}
          </S.Text>
          <S.Text>
            Aluguel de filmes recém-lançados no cinema de forma prática.{" "}
          </S.Text>
          <S.Text>Perfil Kids com controle parental.</S.Text>
        </S.BenefitsText>
      </S.BenefitsWrapper>
    </>
  );
};

export default Benefits;
