import React from "react";

const Welcome = () => {
	// a jsx element must have a single parent
	// used {} for js expressions
	// style attribute with double curly braces for inline jsx styles
	// use className instead of class for adding styles via css

	// spread operator
	const food = ["rice", "beans", "egg"];
	const newFood = ["spag", "noodles"];

	const newArray = [...food, ...newFood];
	console.log(newArray);

	// Array destructuring
	const names = ["dasola", "hazeem", "excel", "tomiwa"];

	const [l] = names;

	console.log(l);

	// object destructuring
	const Person = {
		name: "Joy",
		age: 12,
		gender: "female",
		state: "Anambra",
	};
	const Person2 = {
		namess: "david",
		ages: 5,
	};

	const newPerson = { ...Person, ...Person2 };

	// const { name, state, age, gender } = Person;

	console.log(newPerson);
	return (
		<>
			<div>
				<div>Welcome</div>
				<p
					style={{
						fontSize: 30,
						fontWeight: "bold",
						color: "red",
					}}
				>
					{name}
				</p>
			</div>
		</>
	);
};

export default Welcome;
