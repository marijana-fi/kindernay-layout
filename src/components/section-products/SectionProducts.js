import React from "react";
import productsData from "../../productsData";
import CardProduct from "./CardProduct";

function SectionProducts() {
	return (
		<section className="section-products">
			<div className="container ">
				<div className="row padding-s align-items-center ">
					<div className=" col-sm-12 col-md-3 mr-5">
						<h2>Kay's Products</h2>
					</div>

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
		</section>
	);
}

export default SectionProducts;
