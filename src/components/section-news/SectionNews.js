import React from "react";
import "./section-news.scss";
import SectionTitle from "../SectionTitle";

function SectionNews() {
	return (
		<section id="section-news" className="padding-s ">
			<div className="container">
				<div className="row">
					<div className="col-12 center">
						<SectionTitle innerText="news & updates" />

						<p className="section-news-desc">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod <br /> tempor incididunt ut
							labore et dolore magna aliqua.
						</p>
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="news-card">
							<div className="card-info">
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
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="news-card top">
							<div className="card-info">
								<h3 className="white news-card-label">
									Lorem ipsum dolor sit amet
								</h3>
							</div>
						</div>
						<div className="news-card bottom">
							<div className="card-info">
								<h3 className="white news-card-label">
									Lorem ipsum dolor sit amet
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionNews;
