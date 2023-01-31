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
      '(max-width: 320px)': {
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
