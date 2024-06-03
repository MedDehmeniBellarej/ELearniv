"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

const uploadPreset = process.env.NEXT_CLOUDINARY_PRESET;

const ImageUpload = ({ onChange, value, label = "Course Image 750x500px" }) => {
	const handleUpload = useCallback(
		(result) => {
			onChange(result.info.secure_url);
		},
		[onChange]
	);

	return (
		<div className="form-group">
			<label className="form-label fw-semibold">{label}</label>
			<CldUploadWidget
				onUpload={handleUpload}
				uploadPreset={uploadPreset}
				options={{ maxFiles: 1 }}
				showPoweredBy={false}
				cropping={true}
			>
				{({ open }) => {
					return (
						<>
							<div
								onClick={() => open?.apply()}
								className="img-thumbnail mb-3"
							>
								<div className="text-center">
									Click to upload
									<div className="form-text">{label}</div>
								</div>
							</div>

							{value && (
								<div className="text-center position-relative mb-3">
									{value.endsWith(".zip") ? (
										<Link href={value} target="_blank">
											<i
												className="bx bxs-file"
												style={{
													fontSize: "100px",
													textAlign: "center",
												}}
											></i>
										</Link>
									) : (
										<Image
											src={value}
											alt="listings"
											width={150}
											height={100}
										/>
									)}
								</div>
							)}
						</>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default ImageUpload;
