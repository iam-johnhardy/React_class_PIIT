import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";

const TaskManager = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tasks, setTasks] = useState([]);

	const reset = () => {
		setTitle("");
		setDescription("");
	};

	const handleDelete = (id) => {
		setTasks((prevtasks) => prevtasks.filter((tasks) => tasks.id !== id));
	};

	console.log(tasks);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTask = {
			id: Date.now(),
			title,
			description,
			date: new Date().toLocaleDateString("en-us", {
				day: "numeric",
				month: "long",
				year: "numeric",
			}),
		};

		setTasks((prevTasks) => [...prevTasks, newTask]);

		reset();
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen bg-linear-to-bl from-indigo-950 via-indigo-600 to-indigo-200 p-4">
			{/* form */}
			<form
				onSubmit={handleSubmit}
				className="max-w-2xl rounded-xl p-8 w-full flex flex-col gap-5 bg-white"
			>
				<h1 className="font-bold text-2xl text-center uppercase">
					Enter a task to start your day
				</h1>
				<input
					name="title"
					placeholder="Enter the title of your task"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					type="text"
					className="border border-black rounded-md p-2"
				/>
				<textarea
					name="description"
					rows={5}
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					placeholder="Enter the desc of your task"
					className="border border-black rounded-md p-2"
				></textarea>

				<button
					type="submit"
					className="bg-indigo-700 hover:cursor-pointer w-full p-2 text-white rounded-md hover:bg-indigo-900 transition-all ease-in-out duration-300"
				>
					Add Task
				</button>
			</form>
			{/* task lisk */}
			<div className="bg-white rounded-xl p-4">
				<div className="flex justify-between items-center mb-5">
					<p className="text-2xl text-black">Here are your added tasks</p>
					<button className="bg-red-500 p-2" onClick={() => setTasks([])}>
						reset
					</button>
				</div>
				<div className="flex flex-col gap-4">
					{tasks.length > 0 &&
						tasks.map((task) => (
							<div
								className="bg-stone-200 rounded-md p-4 flex justify-between items-start"
								key={task.id}
							>
								<div>
									<p>title: {task.title}</p>
									<p>desc: {task.description}</p>
									<p>date: {task.date}</p>
								</div>

								<button onClick={() => handleDelete(task.id)}>
									<FaTrash size={20} color="red" />
								</button>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default TaskManager;
