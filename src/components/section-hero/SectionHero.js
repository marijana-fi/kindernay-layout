import React from "react";
import "./section-hero.scss";

function SectionHero() {
	return (
		<section className="hero align-items-center">
			<div className="container">
				<div className="row">
					<div className="col-md-8 ">
						<h1 className="white">Shift anytime anywhere!</h1>
						<h4 className="white">
							The High-performance eMTB gear system
						</h4>

						<button className="d-flex align-items-center">
							<div className="explore justify-content-center">
								<img
									className="align-self-center"
									src="img/arrow-down.svg"
									alt=""
								/>
							</div>
							<p className="white">Explore</p>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionHero;
