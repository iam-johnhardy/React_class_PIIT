import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { apiURL } from "../lib/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// name, image, description, email, phone_number , is_open
const CreateRestaurant = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();
	const {
		register, //connecting an input to hook-form
		handleSubmit, // trigger submission
		formState: { errors }, //handling errors
	} = useForm({
		mode: "onBlur",// validation will be triggered on the blur event
	});

	// asynchronous function to perfom a post request
	const onSubmit = async (values) => {
		try {
			setIsSubmitting(true);
			const response = await fetch(apiURL, {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-type": "application/json",
				},
			});
            // Check if the response is not ok (status code outside the range of 200-299)
			if (!response.ok) {
				throw new Error(`Submit failed: ${response.status} ${response.statusText}`);
			}

			const data = await response.json();
			console.log(data);
			// toast message
			toast.success("Restaurant created successfully");
			// go back to home page
			navigate("/");
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen p-6">
			<h1 className="text-center font-bold text-3xl mb-3">
				Create New Restaurant
			</h1>
			<form
            // handleSubmit will validate the form and then call onSubmit if validation passes
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-4xl mx-auto space-y-5 shadow-2xl p-10 rounded-md"
			>
				{/* name */}
				<Input
					name={"name"}
					label={"Restaurant Name"}
					placeholder={"Enter the name of your restaurant"}
					{...register("name", {
						required: "Please enter your restaurant name",
					})}
					type={"text"}
					error={errors.name?.message}
				/>

				{/* Image */}
				<Input
					name={"image"}
					label={"Image"}
					placeholder={"Enter the image of your restaurant"}
					{...register("image", {
						required: "Please enter your restaurant image",
					})}
					type={"text"}
					error={errors.image?.message}
				/>

				{/* description */}
				<div className="flex flex-col items-start gap-2">
					<label className="text-base font-light">Description</label>
					<textarea
						name="description"
						rows={5}
						placeholder="Enter your restaurant placeholder"
						{...register("description", {
							required: "Please enter your restaurant description",
						})}
						className="w-full p-2 rounded-md text-sm placeholder-neutral-500 border border-neutral-200"
					></textarea>
					{errors.description && (
						<p className="text-red-600 text-xs">
							{errors.description?.message}
						</p>
					)}
				</div>

				{/* email */}
				<Input
					name={"email"}
					label={"Email Address"}
					placeholder={"Enter the email of your restaurant"}
					{...register("email", {
						required: "Please enter your restaurant email",
					})}
					type={"email"}
					error={errors.email?.message}
				/>

				{/* phone_number */}
				<Input
					name={"phone_number"}
					label={"Phone Number"}
					placeholder={"Enter the phone of your restaurant"}
					{...register("phone_number", {
						required: "Please enter your phone number",
					})}
					type={"text"}
					error={errors.phone_number?.message}
				/>

				{/* is_open */}
				<Input
					name={"is_open"}
					label={"Availability"}
					{...register("is_open")}
					type={"checkbox"}
					error={errors.is_open?.message}
				/>

				{/* cta */}
				<button
					type="submit"
					className="bg-green-500 p-2.5 border-none rounded-md w-full text-white"
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default CreateRestaurant;
