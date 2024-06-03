"use client";

import React from "react";

const Input = ({
	id,
	type = "text",
	label,
	labelShow = true,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="form-group">
			{labelShow && <label>{label}</label>}

			<input
				id={id}
				type={type}
				className="form-control"
				placeholder={label}
				{...register(id, { required })}
				disabled={disabled}
				required
			/>
		</div>
	);
};

export default Input;
