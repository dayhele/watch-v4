import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ChannelIcon from "../../assets/img/channel-circle.png";
import * as S from "./styles";

const Carousel = (props) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 8.5 },
    range: {
      min: -5,
      max: 5
    },
    breakpoints: {
      '(max-width: 1340px)': {
        slides: { origin: "center", perView: 7.5 },
      },
      '(max-width: 1165px)': {
        slides: { origin: "center", perView: 6.5 },
      },
      '(max-width: 1016px)': {
        slides: { origin: "center", perView: 5.5 },
      },
      '(max-width: 868px)': {
        slides: { origin: "center", perView: 4.8 },
      },
      '(max-width: 520px)': {
        slides: { origin: "center", perView: 3.5 },
      },
    },
  });

  return (
    <>
      <S.CarouselWrapper>
        <S.CarouselTitle>Canais de TV e Ao Vivo </S.CarouselTitle>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <S.CarouselIcon src={ChannelIcon} alt="" />
          </div>
        </div>
      </S.CarouselWrapper>
    </>
  );
};

export default Carousel;
