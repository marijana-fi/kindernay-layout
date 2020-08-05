import React from "react";
import "./section-news.scss";

function SectionNews() {
	return (
		<section className="section-news">
			<div className="container">
				<div className="row">
					<div className="col-12 center">
						<h2>news & updates</h2>
						<p className="section-news-desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod <br /> tempor incididunt ut
							labore et dolore magna aliqua.
						</p>
					</div>
					<div className="col-6">
						<div className="news-card">
							<h3 className="white news-card-label">
								Lorem ipsum dolor sit amet
							</h3>
							<h5 className="white news-date">
								March 14th, 2019
							</h5>
							<p className="white ">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className="col-6">
						<div className="news-card top">
							<h3 className="white news-card-label">
								Lorem ipsum dolor sit amet
							</h3>
						</div>
						<div className="news-card bottom">
							<h3 className="white news-card-label">
								Lorem ipsum dolor sit amet
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionNews;
