import React from "react";
import Slider from "react-slick";
import "./section-hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroData from "../../data/heroData";

function SectionHero() {
	return (
		<div id="section-hero">
			<Slider dots={false} infinite={false} className="slider">
				{heroData.map((data) => (
					<>
						<img
							src={data.image}
							alt=""
							className="hero-bg-image"
						/>
						<div className="container d-flex hero-text-wrap">
							<div className="row align-self-center">
								<div className="col-md-8 ">
									<div className="hero-title">
										<h1 className="white text-slide-in">
											{data.label}
										</h1>
									</div>
									<h4 className="white">{data.text}</h4>

									<button className="d-flex align-items-center">
										<div className="explore justify-content-center">
											<img
												className="align-self-center explore-arrow"
												src="img/arrow-down.svg"
												alt=""
											/>
										</div>
										<p className="white">Explore</p>
									</button>
								</div>
							</div>
						</div>
					</>
				))}
			</Slider>
		</div>
	);
}

export default SectionHero;
