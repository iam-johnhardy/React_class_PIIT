import React from "react";

const Events = () => {
	const clickMe = (name) => {
		console.log(`You clicked ${name}`);
	};

	const isActive = true;
	const color = "green";
	return (
		<div>
			<button onClick={() => clickMe("charles")}>Click Me</button>
			{/* ternary operator */}
			<p
				style={{
					color:
						color === "blue"
							? "blue"
							: color === "red"
								? "red"
								: color === "green"
									? "green"
									: "pink",
				}}
			>
				{isActive ? "I am Active" : "I am inactive"}
			</p>

			{/* conditional rendering */}
			{isActive && <h1>I am very active</h1>}
		</div>
	);
};

export default Events;
