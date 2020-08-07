import React from "react";
import Slider from "react-slick";
import "./hero-slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
	return (
		<div className="hero-slider">
			<Slider dots={false} className="slider">
				<img src="img/hero-section.jpg" alt="" />
				<img src="img/hero-section.jpg" alt="" />
			</Slider>
		</div>
	);
}

export default HeroSlider;
