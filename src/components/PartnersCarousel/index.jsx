import { useState } from "react";
import * as S from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ParamountIcon from "../../assets/img/paramount-logo.svg";
import ParamountBannerImage from "../../assets/img/paramount-banner.svg";
import PartnersCards from "../PartnersCards";

const PartnersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <S.ContentCarouselWrapper>
              <S.BannersWrapper>
                <S.IconWrapper>
                  <S.ParamountIcon src={ParamountIcon} />
                </S.IconWrapper>
                <S.ParamountBanner>
                  <S.ParamountBannerImg src={ParamountBannerImage} />
                </S.ParamountBanner>
              </S.BannersWrapper>
              <S.ContentWrapper>
                <S.CarouselsWrapper>
                  <S.TextWrapper>
                    <S.Title>Exclusivos Paramount+</S.Title>
                    <S.Text>
                      Paramount+ e Watch <br /> O que não falta é opção!{" "}
                    </S.Text>
                  </S.TextWrapper>
                  <PartnersCards />
                </S.CarouselsWrapper>
              </S.ContentWrapper>
            </S.ContentCarouselWrapper>
          </div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <S.Dots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <S.Dot
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></S.Dot>
            );
          })}
        </S.Dots>
      )}
    </>
  );
};

export default PartnersCarousel;
