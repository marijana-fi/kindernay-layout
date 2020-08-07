import React, { useState } from "react";
import "./header.scss";

function Header() {
	const [offset, setOffset] = useState(0);
	const [isMenuOpen, setMenuOpen] = useState(false);

	function handleMenuOpen(params) {
		setMenuOpen(!isMenuOpen);
	}

	window.addEventListener("scroll", handleScroll);
	function handleScroll() {
		setOffset(window.scrollY);
	}

	return (
		<header className={offset > 0 ? "bg-white" : ""}>
			<div
				className={isMenuOpen ? "overlay show-overlay" : "overlay"}
			></div>
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col ">
						<a href="/" title="Go to Home Page">
							<img
								src={
									offset > 0
										? "img/kindernay-black.png"
										: "img/logo.png"
								}
								alt=""
							/>
						</a>
					</div>
					<div className="col col-md-auto align-items-center d-flex justify-content-end">
						<nav>
							<ul
								className={
									isMenuOpen
										? "header-list open"
										: "header-list"
								}
							>
								<li className="header-item">
									<a href="/products">Products</a>
								</li>
								<li className="header-item">
									<a href="/inside">Inside K'</a>
								</li>
								<li className="header-item">
									<a href="/technology">Technology</a>
								</li>
								<li className="header-item">
									<a href="/company">Company</a>
								</li>
								<li className="header-item">
									<a href="/support">Support</a>
								</li>
							</ul>
						</nav>

						<button className="login" aria-label="Login">
							<img
								src={
									offset > 0
										? "img/bag-icon-black.svg"
										: "img/bag-icon.svg"
								}
								alt="open cart"
							/>
						</button>
						<button className="cart" aria-label="Open Cart">
							<img
								src={
									offset > 0
										? "img/bag-icon-black.svg"
										: "img/bag-icon.svg"
								}
								alt="open cart"
							/>
							<div className="cart-items">
								<span className="item-number">1</span>
							</div>
						</button>
						<button
							className={isMenuOpen ? "menu active" : "menu"}
							onClick={handleMenuOpen}
							aria-label="Open Menu"
						>
							<span></span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
