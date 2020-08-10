import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

function SectionTitle({ innerText, customClass }) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="section-title">
			<Waypoint onEnter={() => setIsVisible(true)}>
				<h2
					dangerouslySetInnerHTML={{
						__html: innerText,
					}}
					className={
						isVisible ? `text-slide-in ${customClass}` : customClass
					}
				></h2>
			</Waypoint>
		</div>
	);
}

export default SectionTitle;
