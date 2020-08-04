import React from "react";
import "./header.scss";

function Header() {
	return (
		<header>
			<div className="container">
				<div className="row justify-content-between">
					<div className="col ">
						<a href="/" title="Go to Home Page">
							<img src="img/logo.png" alt="" />
						</a>
					</div>
					<div className="col-md-auto d-flex justify-content-end">
						<nav>
							<ul>
								<li>
									<a href="#">Products</a>
								</li>
								<li>
									<a href="#">Inside K'</a>
								</li>
								<li>
									<a href="#">Technology</a>
								</li>
								<li>
									<a href="#">Company</a>
								</li>
								<li>
									<a href="#">Support</a>
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
