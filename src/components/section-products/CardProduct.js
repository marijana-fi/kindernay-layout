import React from "react";
import "./card-product.scss";

function CardProduct({ label, text, path }) {
	return (
		<div className="col-12 col-sm-6 col-xl-6 d-flex">
			<div className="card-product">
				<img src={path} alt="" />
				<h3>{label}</h3>
				<h5 className="desc-product">{text}</h5>
				<button className="cta-product">
					Learn More <span></span>
				</button>
				<button className="cta-product">
					Buy Now <span></span>
				</button>
			</div>
		</div>
	);
}

export default CardProduct;
