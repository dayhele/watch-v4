import React from "react";
// import * as S from "./styles";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const PartnersCards = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">aaaaaaaaaaaaaaaaaa</div>
        <div className="keen-slider__slide number-slide2">bbbbbbbbbbbbbbbbbbbb</div>
        <div className="keen-slider__slide number-slide3">ccccccccccccccccccccc</div>
        <div className="keen-slider__slide number-slide4">dddddddddddddddddddddd</div>
        <div className="keen-slider__slide number-slide5">eeeeeeeeeeeeeeeeeeeeeee</div>
        <div className="keen-slider__slide number-slide6">ffffffffffffffffffffffff</div>
      </div>
    </>
  );
};

export default PartnersCards;
