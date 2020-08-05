import React from "react";
import "./section-clients.scss";

function SectionClients() {
	return (
		<section>
			<div className="container">
				<div className="row padding justify-content-between align-items-center">
					<div className="col-5">
						<img src="img/clients-01.png" alt="client" />
					</div>

					<div className="col-6">
						<h2>Our satisfied clients</h2>
						<p className="description">
							"I had a testride on a bike with this gearhub, and
							it is fantastic! The quick and confident shift feel
							as well the possibility to downchange at standstill
							is truly amazing!"
						</p>
						<h3>geir brudeli</h3>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionClients;
