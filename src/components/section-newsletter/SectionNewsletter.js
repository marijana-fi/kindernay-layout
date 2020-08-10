import React from "react";
import Button from "../button/Button";
import "./section-newsletter.scss";
import SectionTitle from "../SectionTitle";

function SectionNewsletter() {
	return (
		<section id="section-newsletter">
			<div className="container">
				<div className="row">
					<div className="col-12 center">
						<SectionTitle innerText="newsletter" />
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
			<picture>
				<source
					media="(max-width: 576px)"
					srcSet="img/bottom-newsletter-mobile.jpg"
				/>
				<source
					media="(min-width: 600px)"
					srcSet="img/bottom-newsletter-bg.jpg"
				/>
				<img src="img/bottom-newsletter-bg.jpg" alt="" />
			</picture>
		</section>
	);
}

export default SectionNewsletter;
