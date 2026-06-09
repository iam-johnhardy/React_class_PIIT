import React from "react";
import { BrowserRouter, Link, useRoutes } from "react-router-dom";
import { routesConfig } from "./routes/routesConfig";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

function App() {
	const AppRoutes = () => {
		const elements = useRoutes(routesConfig);

		return elements;
	};

	return (
		<BrowserRouter>
			<ToastContainer />
			<Navbar />
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
