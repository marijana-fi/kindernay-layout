import React from "react";
import "./card-technology.scss";

function CardTechnology({ label, text, path }) {
	return (
		<div className="card-technology col-xs-12 col-sm-4 px-md-4">
			<img className="icon-technology" src={path} alt="" />
			<h3>{label}</h3>
			<p>{text}</p>
		</div>
	);
}

export default CardTechnology;
