import React, { useRef, useEffect } from "react";
import useKeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import ChannelIcon from "../../assets/img/channel-circle.png";
import * as S from "./styles";

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    new useKeenSlider(sliderRef.current, {
      loop: true,
      mode: "free",
      slides: { origin: "center", perView: 2.5, spacing: 10 },
      range: {
        min: -5,
        max: 5,
      },
    });
  }, []);

  return (
    <>
      <S.CarouselWrapper>
        <S.CarouselTitle>Canais de TV e Ao vivo</S.CarouselTitle>
        <S.StyledSlider ref={sliderRef}>
          <S.CarouselIcon src={ChannelIcon} alt="" />
          <S.CarouselIcon src={ChannelIcon} alt="" />
          <S.CarouselIcon src={ChannelIcon} alt="" />
          <S.CarouselIcon src={ChannelIcon} alt="" />
          <S.CarouselIcon src={ChannelIcon} alt="" />
          <S.CarouselIcon src={ChannelIcon} alt="" />
        </S.StyledSlider>
      </S.CarouselWrapper>
    </>
  );
};

export default Carousel;
