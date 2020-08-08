import React from "react";
import "./section-clients.scss";
import clientsData from "../../data/clientsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionClients() {
	return (
		<section className="section-clients">
			<Slider dots={true} infinite={false}>
				{clientsData.map((data) => (
					<div className="container client-slider">
						<div className="row padding justify-content-between align-items-center">
							<div className="col-xs-12 col-md-6 col-lg-5 mb-4">
								<img src={data.image} alt="client" />
							</div>
							<div className="col-sm-12 col-md-6">
								<h2>Our satisfied clients</h2>
								<p className="client-desc">{data.desc}</p>
								<h3>{data.name}</h3>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
}

export default SectionClients;
