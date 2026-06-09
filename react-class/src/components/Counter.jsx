import React, { useState } from "react";

const Counter = () => {
	const colors = ["green", "yellow", "red", "blue", "black", "beige"];

	const [count, setCount] = useState(0);

	const handleIncrease = () => {
		setCount(count + 1);
	};

	const handleDecrease = () => {
		setCount(count - 1);
	};
	const handleReset = () => {
		setCount(0);
	};

	const generateColor = () => {
		let color;
		if (count >= 0 && count <= 3) {
			color = "green";
		} else {
			color = "red";
		}

		return color;
	};

	return (
		<div>
			<h1
				style={{
					color: generateColor(),
				}}
			>
				{count}
			</h1>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 4,
				}}
			>
				<button
					style={{
						padding: 4,
						borderRadius: 5,
						backgroundColor: colors[2],
						color: "white",
					}}
					onClick={handleIncrease}
				>
					+
				</button>
				<button
					style={{
						padding: 4,
						borderRadius: 5,
						backgroundColor: colors[4],
						color: "white",
					}}
					onClick={handleReset}
				>
					Reset
				</button>
				<button
					style={{
						padding: 4,
						borderRadius: 5,
						backgroundColor: colors[0],
						color: "white",
					}}
					onClick={handleDecrease}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Counter;
// npm create vite@latest
