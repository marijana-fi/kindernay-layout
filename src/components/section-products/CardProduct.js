import React from "react";
import "./card-product.scss";

function CardProduct({ label, text, path }) {
	return (
		<div className="card-product col-sm-12 col-md-4 px-4 float-right">
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
	);
}

export default CardProduct;
