import * as S from "./styles";
import WatchMapImage from "../../assets/img/watch-map.svg";
import { ButtonPrimary, ButtonSecondary } from "../../styles/GlobalStyles";

const WantHaveWatch = () => {
  return (
    <>
      <S.BannerWrapper>
        <S.MapWrapper>
          <S.MapImage src={WatchMapImage} />
        </S.MapWrapper>
        <S.ContentWrapper>
          <S.Title>Quero ter Watch</S.Title>
          <S.Description>
            Gostou das possibilidades? <br /> Experimente ter acesso a todos os
            conteúdos da Watch. <br /> Entre em contato com um provedor!
          </S.Description>
          <S.SearchCityWrapper>
            <S.FieldTitle>Cidade</S.FieldTitle>
            <S.SearchCity
              type="text"
              placeholder="Insira sua cidade"
              name="city"
            />
          </S.SearchCityWrapper>
          <S.ButtonsWrapper>
            <ButtonPrimary>Pesquisar provedor</ButtonPrimary>
            <ButtonSecondary>Pesquisar provedor</ButtonSecondary>
          </S.ButtonsWrapper>
        </S.ContentWrapper>
      </S.BannerWrapper>
    </>
  );
};

export default WantHaveWatch;
