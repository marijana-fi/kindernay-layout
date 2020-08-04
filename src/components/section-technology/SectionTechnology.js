import React from "react";
import CardTechnology from "./CardTechnology";
import technologyData from "../../technologyData";

function SectionTechnology() {
	return (
		<section>
			<div className="container">
				<div className="row padding">
					<h2 className="col-12 center">
						Better Shifting <br /> Technology
					</h2>
					{technologyData.map((card) => (
						<CardTechnology
							label={card.label}
							key={card.label}
							text={card.text}
							path={card.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionTechnology;
