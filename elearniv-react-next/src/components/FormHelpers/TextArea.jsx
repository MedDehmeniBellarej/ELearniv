"use client";

import React from "react";

const TextArea = ({ id, disabled, register, required, errors }) => {
	return (
		<div className="form-group">
			<textarea
				id={id}
				cols="30"
				rows="5"
				placeholder="Write your message..."
				{...register(id, { required })}
				disabled={disabled}
				required
			/>
		</div>
	);
};

export default TextArea;
