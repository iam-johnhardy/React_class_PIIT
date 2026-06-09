import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { useState } from "react";

const Home = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	return (
		<div>
			<Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
			<Hero />
			<Footer />
		</div>
	);
};

export default Home;
