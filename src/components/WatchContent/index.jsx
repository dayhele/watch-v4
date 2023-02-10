import React from "react";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ButtonPrimary } from "../../styles/GlobalStyles";

const WatchContent = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 4.5, spacing: 2 },
      },
    loop: true,
    mode: "free",
    slides: { spacing: 8, perView: 4.5 },
    },
  });
  return (
    <>
      <S.ContentWrapper>
        <S.ContentText>
          <S.Title>Muito mais conteúdo</S.Title>
          <S.Text>
            Com o leque de conteúdos dos nossos <br /> parceiros, você terá a
            experiência de assistir <br /> suas programações favoritas quando e
            como <br />
            quiser.
          </S.Text>
          <ButtonPrimary>Explorar conteúdos</ButtonPrimary>
        </S.ContentText>
        <S.CarouselWrapper>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide2">
              <S.CarouselCard></S.CarouselCard>
            </div>
            <div className="keen-slider__slide number-slide2">
              <S.CarouselCard></S.CarouselCard>
            </div>
            <div className="keen-slider__slide number-slide2">
              <S.CarouselCard></S.CarouselCard>
            </div>
            <div className="keen-slider__slide number-slide2">
              <S.CarouselCard></S.CarouselCard>
            </div>
            <div className="keen-slider__slide number-slide2">
              <S.CarouselCard></S.CarouselCard>
            </div>
          </div>
        </S.CarouselWrapper>
      </S.ContentWrapper>
    </>
  );
};

export default WatchContent;
