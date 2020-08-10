import React from "react";
import "./footer.scss";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="row justify-content-between footer-info">
					<div className="col-12 mb-5 col-md-4">
						<a href="/">
							<img
								src="img/kindernay-black.png"
								alt="Kindernay Logo"
							/>
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
					<div className="col-6 col-sm-4 mb-4 col-md-2">
						<ul className="footer-list">
							<li className="footer-list-item">
								<a href="/products" className="underline">
									Products
								</a>
							</li>
							<li className="footer-list-item">
								<a href="/inside" className="underline">
									Inside K'
								</a>
							</li>
							<li className="footer-list-item">
								<a href="company" className="underline">
									Company
								</a>
							</li>
							<li className="footer-list-item">
								<a href="/support" className="underline">
									Support
								</a>
							</li>
						</ul>
					</div>
					<div className="col-6 col-sm-4  col-md-2">
						<ul className="footer-list">
							<li className="footer-list-item">
								<a href="/" className="underline">
									FAQ
								</a>
							</li>
							<li className="footer-list-item">
								<a href="/payment" className="underline">
									Payment
								</a>
							</li>
							<li className="footer-list-item">
								<a href="/shipping" className="underline">
									Shipping
								</a>
							</li>
							<li className="footer-list-item">
								<a href="/contact" className="underline">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-4 col-md-3">
						<h4 className="footer-item">Follow Us</h4>
						<ul className="social-list d-flex align-items-center">
							<li className="social-list-item">
								<a
									href="/"
									className="social-icon"
									aria-label="Navigate to YouTube"
								>
									<img src="img/yt-icon.svg" alt="youtube" />
								</a>
							</li>
							<li className="social-list-item">
								<a
									href="/"
									className="social-icon"
									aria-label="Navigate to Instagram"
								>
									<img
										src="img/ig-icon.svg"
										alt="instagram"
									/>
								</a>
							</li>
							<li className="social-list-item">
								<a
									href="/"
									className="social-icon"
									aria-label="Navigate to Facebook"
								>
									<img src="img/fb-icon.svg" alt="facebook" />
								</a>
							</li>
						</ul>
						<h4 className="footer-item">Payment</h4>
						<img src="img/payments-footer.png" alt="" />
					</div>
				</div>
			</div>
			<div className="footer-copyright  ">
				<div className="container">
					<div className="row">
						<div className="col-12 d-flex justify-content-between">
							<h6>© 2020. All rights reserved</h6>
							<div className="d-flex align-items-center">
								<span>Web by</span>
								<a
									href="https://intellrocket.com/"
									className="logo"
								>
									<img
										src="img/intell-rocket-logo.png"
										alt="intellrocket logo"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
