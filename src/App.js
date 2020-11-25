import React from 'react';
//import BootstrapCarousel from './components/carousel/BootstrapCarousel';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Navbar from './components/Nav/Navbar';
import './App.css';
import BootstrapCarousel from './components/carousel/BootstrapCarousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BootstrapCarouselDemo/> */}
      <BootstrapCarousel/>
      App
    </div>
  );
}

export default App;