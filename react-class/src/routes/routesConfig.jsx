import About from "../pages/About";
import Contact from "../pages/Contact";
import CreateRestaurant from "../pages/CreateRestaurant";
import Home from "../pages/Home";
import Services from "../pages/Services";
import UserPage from "../pages/UserPage";

export const routesConfig = [
	{
		path: "/",
		children: [
			{ index: true, element: <Home /> },
			{ path: ":id", element: <UserPage /> },
			{ path: "about", element: <About /> },
			{ path: "services", element: <Services /> },
			{ path: "contact", element: <Contact /> },
			{ path: "create-restaurant", element: <CreateRestaurant /> },
		],
	},
];
