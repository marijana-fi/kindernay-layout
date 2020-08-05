import React from "react";
import "./card-why.scss";

function CardWhy({ label, text, path }) {
	return (
		<div className="card-why col-4 px-4">
			<img className="card-bg" src={path} alt="" />
			<h3 className="mx-7">{label}</h3>
			<p>{text}</p>
		</div>
	);
}

export default CardWhy;
