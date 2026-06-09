import React from "react";

const Input = ({ label, type, placeholder, name, error, ...props }) => {
	return (
		<div
			className={`flex gap-2 ${type === "checkbox" ? "flex-row items-center" : "flex-col items-start"}`}
		>
			<label className="text-base font-light">{label}</label>
			<input
				type={type}
				name={name}
				{...props}
				placeholder={placeholder}
				className={`p-2 rounded-md text-sm placeholder-neutral-500 border border-neutral-200 ${type === "checkbox" ? "w-fit" : "w-full"}`}
			/>
			{error && <p className="text-red-600 text-xs">{error}</p>}
		</div>
	);
};

export default Input;
