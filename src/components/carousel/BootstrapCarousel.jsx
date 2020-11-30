import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-bootstrap/Carousel";
import '../../App.css'
export class BootstrapCarousel extends Component {
  render() {
    return (
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="slide"
        infinite
        mouseTracking
        touchTracking={false}
        disableDotsControls="false"
        disableButtonsControls="true"
        items={items}
      />
    );
  }
}
const handleDragStart = (e) => e.preventDefault();
const items = [
  <div>
    <img
      src="assets/img/img1.jpg"
      onDragStart={handleDragStart}
      className="sliderimg"
    />
    <div class="centered">
      <h1>THANKFUL FOR FREE DELIVERY</h1>
      <p>Score free delivery on any size order for a limited time</p>
    </div>
  </div>,
  <img
    src="assets/img/img2.jpg"
    onDragStart={handleDragStart}
    className="sliderimg"
  />,
  <img
    src="assets/img/img3.jpg"
    onDragStart={handleDragStart}
    className="sliderimg"
  />,
];

export default BootstrapCarousel;
