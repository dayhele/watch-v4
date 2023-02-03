import React from "react";
import * as S from "./styles";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ButtonPrimary } from "../../styles/GlobalStyles";
import { useState } from "react";

const WatchContent = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 4 },
    range: {
      min: -5,
      max: 5,
    },
    // breakpoints: {
    //     '(max-width: 1340px)': {
    //       slides: { origin: "center", perView: 7.5 },
    //     },
    //     '(max-width: 1165px)': {
    //       slides: { origin: "center", perView: 6.5 },
    //     },
    //     '(max-width: 1016px)': {
    //       slides: { origin: "center", perView: 5.5 },
    //     },
    //     '(max-width: 868px)': {
    //       slides: { origin: "center", perView: 4.8 },
    //     },
    //     '(max-width: 520px)': {
    //       slides: { origin: "center", perView: 3.5 },
    //     },
    //   },
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
