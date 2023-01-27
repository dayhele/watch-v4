import React, { useState } from "react";
import { useKeenSlider as ParentCarouselComponent } from "keen-slider/react";
import { useKeenSlider as ChildCarouselComponent } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";

const ParentCarouselWrapper = styled.div`
  width: 100%;
  height: 600px;
`;

const ChildCarouselWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const ParentCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ParentCarouselWrapper>
      <ParentCarouselComponent
        onChange={({ slide }) => setSelectedIndex(slide.index)}
      >
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </ParentCarouselComponent>
      <ChildCarouselWrapper>
        <ChildCarouselComponent slide={selectedIndex} slidesToShow={3}>
          <div>Child Slide 1</div>
          <div>Child Slide 2</div>
          <div>Child Slide 3</div>
          <div>Child Slide 4</div>
          <div>Child Slide 5</div>
        </ChildCarouselComponent>
      </ChildCarouselWrapper>
    </ParentCarouselWrapper>
  );
};

export default ParentCarousel;
