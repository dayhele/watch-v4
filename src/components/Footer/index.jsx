import React from "react";
import * as S from "./styles";
import LogoWatch from "../../assets/img/logo-watch-white.png";
import LogoInstagram from "../../assets/img/instagram-logo.svg";
import LogoAppStore from "../../assets/img/app-store.svg"
import LogoPlayStore from "../../assets/img/play-store.svg";

const Footer = () => {
  return (
    <>
      <S.Divisor />
      <S.FooterWrapper>
        <S.FooterContentWrapper>
          <S.CopyrightAdvice>
            © 2021 WarnerMedia Direct Latin America, LLC. Todos os direitos
            reservados. HBO Max é usado sob licença. <br /> ©2020 Home Box
            Office, Inc. Todos os direitos reservados. As marcas registradas
            HBO® e HBO MAX® são propriedades da Home Box Office, Inc. <br />{" "}
            ©2020 HBO Ole Partners. Todos os direitos reservados. As marcas
            registradas HBO® e HBO MAX® são propriedades da Home Box Office,
            Inc. <br /> A Apple, o logo Apple e a App Store são marcas
            registradas da Apple, Inc. resgistrada nos Estados Unidos e outros
            países. <br /> Google Play é uma marca registrada de Google, Inc.
          </S.CopyrightAdvice>
          <S.LogoFooterContent>
            <S.WatchLogo src={LogoWatch} />
            <S.WatchCopyright>
              Watch © 2022 Todos os direitos reservados.
            </S.WatchCopyright>
          </S.LogoFooterContent>
        </S.FooterContentWrapper>
        <S.LinksWrapper>
          <S.SocialWrapper>
            <a href="#">
              <S.SocialIcon src={LogoInstagram} />
            </a>
            <a href="#">
              <S.SocialIcon src={LogoInstagram} />
            </a>
          </S.SocialWrapper>
          <S.StoresWrapper>
          <a href="#">
              <S.StoreIcon src={LogoPlayStore} />
            </a>
            <a href="#">
              <S.StoreIcon src={LogoAppStore} />
            </a>
          </S.StoresWrapper>
        </S.LinksWrapper>
      </S.FooterWrapper>
    </>
  );
};

export default Footer;
