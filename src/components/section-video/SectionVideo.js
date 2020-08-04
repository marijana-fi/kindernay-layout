import React from "react";
import "./section-video.scss";

function SectionVideo() {
	return (
		<section className="video align-items-center">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-5">
						<h2 className="white">Shift the way you ride.</h2>
						<p className="white">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore
						</p>
					</div>
					<div className="col-6 center">
						<button className="play">
							<img src="img/play-icon.svg" alt="play video" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionVideo;
