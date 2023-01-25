import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as S from "./styles";

const Carousel = (props) => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 5, loop: true });

  return (
    <>
    <S.CarouselWrapper>
      <S.CarouselTitle>Canais de TV e Ao Vivo </S.CarouselTitle>
      <div ref={sliderRef} className="keen-slider">
        {props.children}
      </div>
    </S.CarouselWrapper>
    </>
  );
};

export default Carousel;
