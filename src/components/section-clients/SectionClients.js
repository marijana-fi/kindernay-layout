import React, { useState, useRef } from "react";
import "./section-clients.scss";
import clientsData from "../../data/clientsData";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionClients() {
	const customSlider = useRef();
	const [current, setCurrent] = useState(0);
	// setting slider configurations
	const sliderSettings = {
		infinite: true,
		speed: 800,
		dots: false,
		arrows: true,
		beforeChange: (current, next) => setCurrent(next),
	};

	const gotoNext = () => {
		customSlider.current.slickNext();
	};

	const gotoPrev = () => {
		customSlider.current.slickPrev();
	};
	const renderDots = () => {
		return (
			<>
				{clientsData.map((data, i) => (
					<button
						onClick={() => customSlider.current.slickGoTo(i)}
						className={i === current ? "dot active" : "dot"}
					></button>
				))}
			</>
		);
	};

	return (
		<section id="section-clients">
			<Slider {...sliderSettings} ref={customSlider}>
				{clientsData.map((data) => (
					<div className="container">
						<div className="row padding justify-content-between align-items-center">
							<div className="col-xs-12 col-md-6 col-lg-5 mb-4">
								<div className="img-wrap">
									<img src={data.image} alt="client" />
									<div className="slider-dots">
										{renderDots()}
									</div>
								</div>
							</div>

							<div className="col-sm-12 col-md-6">
								<h2>Our satisfied clients</h2>

								<p className="client-desc">{data.desc}</p>
								<div className="client-name">
									<h3>{data.name}</h3>
									<div className="slider-arrows">
										<button
											className="arrow-prev"
											onClick={() => gotoPrev()}
										>
											<svg
												width="8"
												height="12"
												viewBox="0 0 8 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M8 1.41L3.42 6L8 10.59L6.59 12L0.59 6L6.59 1.23266e-07L8 1.41Z"
													fill="#b7c4ce"
												/>
											</svg>
										</button>
										<button
											className="arrow-next"
											onClick={() => gotoNext()}
										>
											<svg
												width="8"
												height="12"
												viewBox="0 0 8 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
													fill="#b7c4ce"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
}

export default SectionClients;
