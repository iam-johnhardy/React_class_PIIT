import React from "react";
import { Link } from "react-router-dom";

const NAVLINKS = [
	{ label: "Home", path: "/" },
	{ label: "About", path: "/about" },
	{ label: "Services", path: "/services" },
	{ label: "Contact", path: "/contact" },
];

const Navbar = () => {
	return (
		<nav className="flex justify-center items-center gap-10 p-4">
			{NAVLINKS.map((item, i) => (
				<Link to={item.path} key={i} className="text-black hover:text-black/60">
					{item.label}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
