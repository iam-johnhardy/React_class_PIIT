import React, { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hello world");
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-xl mx-auto text-center shadow p-4 rounded-xl"
		>
			<h1 className="text-xl font-bold text-black">User Registration </h1>
			{/* username */}
			<div className="flex items-start flex-col gap-1">
				<label htmlFor="name">Username</label>

				{/* inputs without the values attached to it are called uncontrolled components */}
				<input
					className="border border-black/20 p-2 rounded-md w-full"
					name="name"
					type="text"
					placeholder="Please enter your name"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</div>

			{/* password */}
			<div className="flex items-start flex-col gap-1 mt-5">
				<label htmlFor="password">
					Password <span className="text-red-500">*</span>
				</label>
				<input
					className="border border-black/20 p-2 rounded-md w-full"
					name="password"
					type="password"
					placeholder="Please enter your password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</div>

			{/* submit */}
			<button
				type="submit"
				className="p-2 rounded-md bg-amber-700 text-white w-full mt-5"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
