import React from "react";

import Header from "./components/header/Header";
import SectionHero from "./components/section-hero/SectionHero";
import SectionTechnology from "./components/section-technology/SectionTechnology";
import SectionVideo from "./components/section-video/SectionVideo";
import SectionProducts from "./components/section-products/SectionProducts";
import SectionWhy from "./components/section-why/SectionWhy";
import SectionClients from "./components/section-clients/SectionClients";
import SectionBuy from "./components/section-buy/SectionBuy";
import SectionNews from "./components/section-news/SectionNews";
import SectionNewsletter from "./components/section-newsletter/SectionNewsletter";
import Footer from "./components/footer/Footer";
import HeroSlider from "./components/hero-slider/HeroSlider";

function App() {
	return (
		<div className="App">
			<HeroSlider />
			<Header />
			<SectionHero />
			<SectionTechnology />
			<SectionVideo />
			<SectionProducts />
			<SectionWhy />
			<SectionClients />
			<SectionBuy />
			<SectionNews />
			<SectionNewsletter />
			<Footer />
		</div>
	);
}

export default App;
