import React, { useState } from "react";
import "./header.scss";

function Header() {
	const [offset, setOffset] = useState(0);

	window.addEventListener("scroll", handleScroll);
	function handleScroll() {
		setOffset(window.scrollY);
	}

	return (
		<header className={offset > 0 ? "bg-white" : ""}>
			<div className="container">
				<div className="row justify-content-between">
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
					<div className="col-md-auto align-items-center d-flex justify-content-end">
						<nav>
							<ul className="header-list">
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

						<button className="login">
							<img src="img/bag-img.svg" alt="open cart" />
						</button>
						<button className="cart">
							<img src="img/bag-img.svg" alt="open cart" />
							<div className="cart-items">
								<span className="item-number">1</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
