import React from "react";
import "./card-why.scss";

function CardWhy({ label, text, path }) {
	return (
		<div className="card-why mb-4 mb-sm-0 col-xs-12 col-sm-4 px-md-4">
			<img className="card-bg" src={path} alt="" />
			<h3 className="why-card-label mx-7">{label}</h3>
			<p>{text}</p>
		</div>
	);
}

export default CardWhy;
