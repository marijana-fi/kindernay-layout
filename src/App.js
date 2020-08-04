import React from "react";

import Header from "./components/header/Header";
import SectionHero from "./components/section-hero/SectionHero";
import SectionTechnology from "./components/section-technology/SectionTechnology";
import SectionVideo from "./components/section-video/SectionVideo";

function App() {
	return (
		<div className="App">
			<Header />
			<SectionHero />
			<SectionTechnology />
			<SectionVideo />
		</div>
	);
}

export default App;
