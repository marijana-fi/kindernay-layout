import React from "react";
import "./section-video.scss";

function SectionVideo() {
	return (
		<section className="video align-items-center">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-sm-12 col-md-6 col-lg-5">
						<h2 className="white">Shift the way you ride.</h2>
						<p className="white">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore
						</p>
					</div>
					<div className="col-sm-12 col-md-6 center">
						<button className="play">
							<img src="img/play-icon.svg" alt="play video" />
							<div className="base-pulse pulse1"></div>
							<div className="base-pulse pulse2"></div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionVideo;
