import React from "react";
import "./section-why.scss";
import whyData from "../../whyData";
import CardWhy from "./CardWhy";

function SectionWhy() {
	return (
		<section className="section-why">
			<div className="container">
				<div className="row">
					<div className="col-12 center">
						<h2 className="why-label">Why kindernay</h2>
					</div>

					{whyData.map((card) => (
						<CardWhy
							label={card.label}
							key={card.label}
							text={card.text}
							path={card.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionWhy;
