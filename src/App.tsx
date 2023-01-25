import * as React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ChannelIcon from "./assets/img/channel-circle.png";
import Benefits from "./components/Benefits";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Theme>
        <Header>
          <Navbar />
        </Header>
        <Hero />
        <Carousel>
          <div className="keen-slider__slide">
            <img src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src={ChannelIcon} alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src={ChannelIcon} alt="" />
          </div>
        </Carousel>
        <Benefits />
      </Theme>
    </div>
  );
}
