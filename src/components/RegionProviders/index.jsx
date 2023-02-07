import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as S from "./styles";

const RegionProviders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2.5, spacing: 4 },
      },
      slides: { perView: 4, spacing: 2 },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
  });
  return (
    <>
      <S.ProvidersWrapper>
        <S.ProvidersTitle>Provedores na sua região</S.ProvidersTitle>
        <S.CarouselWrapper>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <S.ProvidersCard>
                <S.TitleCard>Provedor 1</S.TitleCard>
              </S.ProvidersCard>
            </div>
            <div className="keen-slider__slide number-slide2">
              <S.ProvidersCard>
                <S.TitleCard>Provedor 1</S.TitleCard>
              </S.ProvidersCard>
            </div>
            <div className="keen-slider__slide number-slide3">
              <S.ProvidersCard>
                <S.TitleCard>Provedor 1</S.TitleCard>
              </S.ProvidersCard>
            </div>
            <div className="keen-slider__slide number-slide4">
              <S.ProvidersCard>
                <S.TitleCard>Provedor 1</S.TitleCard>
              </S.ProvidersCard>
            </div>
            <div className="keen-slider__slide number-slide5">
              <S.ProvidersCard>
                <S.TitleCard>Provedor 1</S.TitleCard>
              </S.ProvidersCard>
            </div>
            <div className="keen-slider__slide number-slide6">
              <S.ProvidersCard>
                <S.TitleCard>Provedor 1</S.TitleCard>
              </S.ProvidersCard>
            </div>
          </div>
        </S.CarouselWrapper>
      </S.ProvidersWrapper>
    </>
  );
};

export default RegionProviders;
