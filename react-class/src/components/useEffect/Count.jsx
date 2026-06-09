import React, { useEffect, useState } from "react";

const Count = () => {
	const [count, setCount] = useState(20);
	// useEffect hook
	// its used to perform side-effects, e.g data fetching and timers e.t.c]

	const handleIncrease = () => {
		setCount(count + 1);
	};

	// triggers a function when the component renders for the first time
	// dependency array - this controls how often a useEffect function is triggered
	useEffect(() => {
		console.log("Hello i am 2 years old");
	}, [count]);
	// an empty dependency array ensures the useEffect function is triggered only once

	return (
		<div className="p-40 bg-linear-to-br from-black to-green-900 min-h-screen text-white">
			<h1 className="text-7xl">{count}</h1>
			<button className="bg-red-500 p-2" onClick={handleIncrease}>
				INcrease Count
			</button>
		</div>
	);
};

export default Count;
