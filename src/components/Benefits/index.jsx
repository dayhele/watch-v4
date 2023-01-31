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
          <S.IconContent>
            <S.IconImage src={ContentIcon} />
            <S.TextContent>
              Mais de 11.000 horas distribuídas entre séries, filmes, realities,
              desenhos animados e muito mais.
            </S.TextContent>
          </S.IconContent>
          <S.IconContent>
            <S.IconImage src={ScreensIcon} />
            <S.TextContent>
              Possibilidade de assistir em 8 perfis e até 4 telas simultâneas.
            </S.TextContent>
          </S.IconContent>
          <S.IconContent>
            <S.IconImage src={RentIcon} />
            <S.TextContent>
              Aluguel de filmes recém-lançados no cinema de forma prática.
            </S.TextContent>
          </S.IconContent>
          <S.IconContent>
            <S.IconImage src={KidsIcon} />
            <S.TextContent>Perfil Kids com controle parental.</S.TextContent>
          </S.IconContent>
        </S.BenefitsIcons>
      </S.BenefitsWrapper>
    </>
  );
};

export default Benefits;
