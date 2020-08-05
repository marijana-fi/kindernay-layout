import React from "react";
import "./footer.scss";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-4">
						<a href="/">
							<img src="" alt="Kindernay Logo" />
						</a>
						<p className="footer-desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<a className="terms" href="/">
							Terms & Condition / Privacy Policy
						</a>
					</div>
					<div className="col-2">
						<ul className="footer-list">
							<li className="footer-list-item">
								<a href="#">Products</a>
							</li>
							<li className="footer-list-item">
								<a href="#">Inside K'</a>
							</li>
							<li className="footer-list-item">
								<a href="#">Company</a>
							</li>
							<li className="footer-list-item">
								<a href="#">Support</a>
							</li>
						</ul>
					</div>{" "}
					<div className="col-2">
						<ul className="footer-list">
							<li className="footer-list-item">
								<a href="#">FAQ</a>
							</li>
							<li className="footer-list-item">
								<a href="#">Payment</a>
							</li>
							<li className="footer-list-item">
								<a href="#">Shipping</a>
							</li>
							<li className="footer-list-item">
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
					<div className="col-2">
						<a href="/">Follow Us</a>
						<ul className="social-list">
							<li>
								<a
									href="/"
									className="social-icon"
									aria-label="Navigate to YouTube"
								>
									<img src="" alt="youtube" />
								</a>
							</li>
							<li>
								<a
									href="/"
									className="social-icon"
									aria-label="Navigate to Instagram"
								>
									<img src="" alt="instagram" />
								</a>
							</li>
							<li>
								<a
									href="/"
									className="social-icon"
									aria-label="Navigate to Facebook"
								>
									<img src="" alt="facebook" />
								</a>
							</li>
						</ul>
						<a href="/payment">Payment</a>
					</div>
					<div className="footer-copyright col-12 d-flex justify-content-between">
						<h6>© 2020. All rights reserved</h6>
						<div>
							<span>Web by</span>
							<a href="https://intellrocket.com/">
								<img src="" alt="intelrocket logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
