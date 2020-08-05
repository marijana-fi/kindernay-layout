import React from "react";
import "./card-product.scss";

function CardProduct({ label, text, path }) {
	return (
		<div className="card-product col-6 mx-3 px-4 ">
			<img src={path} alt="" />
			<h3>{label}</h3>
			<h5 className="desc-product">{text}</h5>
			<button className="learn-more">
				Learn More <img src="img/arrow-right-icon.svg" alt="" />
			</button>
			<button>
				Buy Now <img src="img/arrow-right-icon.svg" alt="" />
			</button>
		</div>
	);
}

export default CardProduct;
