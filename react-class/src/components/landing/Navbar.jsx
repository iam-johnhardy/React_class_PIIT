import React from "react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
	const listStyle = "text-sm text-black hover:underline hover:cursor-pointer";
	return (
		<nav className="flex items-center justify-between">
			<h1>My App</h1>
			<ul>
				<li className={listStyle}>Home</li>
				<li className={listStyle}>About</li>
				<li className={listStyle}>Contact</li>
			</ul>
			<button onClick={() => setIsDarkMode(!isDarkMode)}>☀️ 🌙</button>
		</nav>
	);
};

export default Navbar;
