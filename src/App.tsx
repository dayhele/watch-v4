import * as React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import ChannelIcon from "../../assets/img/channel-circle.png";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Theme>
       <Header>
        <Navbar />
       </Header>
       <Hero />
       <Carousel />
      </Theme>
    </div>
  );
}
