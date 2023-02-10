import * as React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import RemoveNavigationBar from "./components/RemoveNavigationBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChannelsLiveCarousel from "./components/ChannelsLiveCarousel";
import Benefits from "./components/Benefits";
import PartnersCarousel from "./components/PartnersCarousel";
import WatchContent from "./components/WatchContent";
import WantHaveWatch from "./components/WantHaveWatch";
import RegionProviders from "./components/RegionProviders";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <RemoveNavigationBar />
      <GlobalStyle />
      <Theme>
        <Header>
          <Navbar />
        </Header>
        <Hero />
        <ChannelsLiveCarousel />
        <Benefits />
        <PartnersCarousel />
        <WatchContent />
        <WantHaveWatch />
        <RegionProviders />
        <FAQ />
        <Footer />
      </Theme>
    </div>
  );
}
