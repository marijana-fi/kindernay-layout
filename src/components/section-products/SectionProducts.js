import React from "react";
import CardProduct from "./CardProduct";
import productsData from "../../data/productsData";
import SectionTitle from "../SectionTitle";

function SectionProducts() {
	return (
		<section id="section-products">
			<div className="container ">
				<div className="row padding-s align-items-center ">
					<div className=" col-12 col-xl-4">
						<SectionTitle innerText="Kay's Products" />
					</div>
					<div className="col-12 col-xl-8 d-flex">
						<div className="row">
							{productsData.map((card) => (
								<CardProduct
									label={card.label}
									key={card.label}
									text={card.text}
									path={card.image}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionProducts;
