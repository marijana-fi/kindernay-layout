import React from "react";
import Button from "../button/Button";
import "./section-newsletter.scss";

function SectionNewsletter() {
	return (
		<section className="newsletter">
			<div className="container">
				<div className="row">
					<div className="col-12 center">
						<h2>newsletter</h2>
						<p className="newsletter-desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor <br /> incididunt ut
							labore et dolore magna aliqua.
						</p>
					</div>
					<div className="col-xs-12 col-md-8 mx-auto">
						<form
							action=""
							className="d-flex justify-content-between"
						>
							<input
								type="email"
								placeholder="Enter your email address"
							/>
							<Button name="btn large" label="Subscribe" />
						</form>
					</div>
				</div>
			</div>

			<img src="img/bottom-newsletter-bg.jpg" alt="" />
		</section>
	);
}

export default SectionNewsletter;
