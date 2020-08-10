import React from "react";
import CardTechnology from "./CardTechnology";
import technologyData from "../../data/technologyData";
import SectionTitle from "../SectionTitle";

function SectionTechnology() {
	return (
		<section id="section-technology">
			<div className="container">
				<div className="row padding">
					<div className="col-12">
						<SectionTitle
							innerText="Better Shifting <br/> Technology"
							customClass="center"
						/>
					</div>

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
