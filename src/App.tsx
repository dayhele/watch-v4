import * as React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChannelsLiveCarousel from "./components/ChannelsLiveCarousel";
import Benefits from "./components/Benefits";
import PartnersCarousel from "./components/PartnersCarousel";


export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Theme>
        <Header>
          <Navbar />
        </Header>
        <Hero />
        <ChannelsLiveCarousel />
        <Benefits />
        <PartnersCarousel  />
      </Theme>
    </div>
  );
}
