import React from "react";
import CardProduct from "./CardProduct";
import productsData from "../../data/productsData";

function SectionProducts() {
	return (
		<section className="section-products">
			<div className="container ">
				<div className="row padding-s align-items-center ">
					<div className=" col-12 col-xl-4">
						<h2>Kay's Products</h2>
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
