import React, { useState } from "react";
// import { Modals } from "./Modals";

const ProductCard = ({
	id,
	name,
	image,
	description,
	email,
	phone_number,
	is_open,
	handleDelete,
	handleUpdate,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState({
		name,
		description,
		email,
		phone_number,
		is_open,
        
	});
    // const[open, setOpen] = useState(false);

	const handleChange = (field) => (event) => {
        // Determine the value based on the field type (checkbox or text)
		const value = field === "is_open" ? event.target.checked : event.target.value;
        // Update the formData state with the new value for the specified field
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handlePatch = () => {
		handleUpdate(id, formData, "PATCH");
		setIsEditing(false);
		setOpen(false);
	};

	const handlePut = () => {
		handleUpdate(id, formData, "PUT");
		setIsEditing(false);
		setOpen(false);
	};

	const handleCancel = () => {
		setFormData({ name, description, email, phone_number, is_open });
		setIsEditing(false);
		setOpen(false);
	};

	return (
		<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
			{/* Product Image */}
			<div className="w-full h-56 bg-gray-100 overflow-hidden">
				<img src={image} alt={name} className="w-full h-full object-cover" />
			</div>

			{/* Card Content */}
			<div className="p-3 space-y-2">
				{/* Product Name + Status */}
				<div className="flex items-start justify-between gap-3">
					<h2 className="text-lg font-semibold text-gray-900 leading-snug">
						{formData.name}
					</h2>

					<span
						className={`text-xs font-medium px-3 py-1 rounded-full ${
							formData.is_open
								? "bg-green-100 text-green-700"
								: "bg-red-100 text-red-700"
						}`}
					>
						{formData.is_open ? "Open" : "Closed"}
					</span>
				</div>

				{/* Description */}
				<p className="text-sm text-gray-600 leading-relaxed">{formData.description}</p>

				{/* Contact Info */}
				<div className="space-y-2 border-t border-gray-100 pt-4">
					<div>
						<p className="text-xs uppercase tracking-wide text-gray-400">
							Email
						</p>
						<p className="text-sm text-gray-800 break-all">{email}</p>
					</div>

					<div>
						<p className="text-xs uppercase tracking-wide text-gray-400">
							Phone
						</p>
						<p className="text-sm text-gray-800">{formData.phone_number}</p>
					</div>

					<div className="flex justify-between items-center mt-3">
						<button
							onClick={handleDelete}
							className="text-white bg-red-600 px-3 py-2 rounded-md text-sm"
						>
							Delete
						</button>

                        
						<button
							onClick={() => {
								setIsEditing(true);
								setOpen(true);
							}}
							className="text-white bg-blue-600 px-3 py-2 rounded-md text-sm"
						>
							Edit
						</button>
					</div>
                  {/*  Edit Form drop down */}
                  {/* Modals component for edit form */}
                  {/* <Modals
			open={open}
			onClose={() => {
				setOpen(false);
				setIsEditing(false);
			}}
		> */}
					{isEditing ? (
						<div className="mt-4 space-y-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
							<div>
								<label className="block text-xs uppercase tracking-wide text-gray-500">
									Name
								</label>
								<input
									value={formData.name}
									onChange={handleChange("name")}
									className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
								/>
							</div>

							<div>
								<label className="block text-xs uppercase tracking-wide text-gray-500">
									Description
								</label>
								<textarea
									value={formData.description}
									onChange={handleChange("description")}
									className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
								/>
							</div>

							<div className="grid gap-3 md:grid-cols-2">
								<div>
									<label className="block text-xs uppercase tracking-wide text-gray-500">
										Email
									</label>
									<input
										value={formData.email}
										onChange={handleChange("email")}
										className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
									/>
								</div>

								<div>
									<label className="block text-xs uppercase tracking-wide text-gray-500">
										Phone
									</label>
									<input
										value={formData.phone_number}
										onChange={handleChange("phone_number")}
										className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
									/>
								</div>
							</div>

							<div className="flex items-center gap-3">
								<label className="inline-flex items-center gap-2 text-sm text-gray-700">
									<input
										type="checkbox"
										checked={formData.is_open}
                                        // The handleChange function will correctly update the formData 
                                        // state when the checkbox is toggled
										onChange={handleChange("is_open")}
										className="h-4 w-4 rounded border-gray-300 text-blue-600"
									/>
									<span>Open now</span>
								</label>
							</div>

							<div className="flex flex-wrap gap-2">
								<button
									onClick={handlePatch}
									className="text-white bg-blue-600 px-3 py-2 rounded-md text-sm"
								>
									Save with PATCH
								</button>
								<button
									onClick={handlePut}
									className="text-white bg-indigo-600 px-3 py-2 rounded-md text-sm"
								>
									Save with PUT
								</button>
								<button
									onClick={handleCancel}
									className="text-gray-700 bg-white border border-gray-300 px-3 py-2 rounded-md text-sm"
								>
									Cancel
								</button>
							</div>
						</div>
					) : null}
                  {/* </Modals> */}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
