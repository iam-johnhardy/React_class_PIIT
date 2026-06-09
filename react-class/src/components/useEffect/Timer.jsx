import React, { useEffect, useState } from "react";

const Timer = () => {
	// useState initialization with a value of 0
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval;

		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		}

		// clean up function prevents memory leaks
		return () => clearInterval(interval);
	}, [isRunning]);

	return (
		<div className="flex justify-center items-center flex-col gap-20">
			<h1 className="text-6xl font-bold text-center pt-20">Time: {time}</h1>
			<div className="space-x-7">
				<button
					onClick={() => setIsRunning(true)}
					className="p-2 rounded-md text-white bg-green-600"
				>
					Start
				</button>
				<button
					onClick={() => setIsRunning(false)}
					className="p-2 rounded-md text-white bg-red-600"
				>
					Stop
				</button>
				<button
					onClick={() => {
						setTime(0);
						setIsRunning(false);
					}}
					className="p-2 rounded-md text-white bg-blue-600"
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Timer;
