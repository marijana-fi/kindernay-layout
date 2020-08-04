import React from "react";
import "./card-technology.scss";

function CardTechnology({ label, text, path }) {
	return (
		<div className="card-technology col-4 px-4">
			<img className="icon-technology" src={path} alt="" />
			<h3>{label}</h3>
			<p>{text}</p>
		</div>
	);
}

export default CardTechnology;
