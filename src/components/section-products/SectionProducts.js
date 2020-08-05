import React from "react";
import productsData from "../../productsData";
import CardProduct from "./CardProduct";

function SectionProducts() {
	return (
		<section>
			<div className="container ">
				<div className="row padding-s align-items-center justify-content-between">
					<div className="col-md-3 mr-2 ">
						<h2>Kay's Products</h2>
					</div>
					<div className="col-8 d-flex justify-content-between">
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
		</section>
	);
}

export default SectionProducts;
