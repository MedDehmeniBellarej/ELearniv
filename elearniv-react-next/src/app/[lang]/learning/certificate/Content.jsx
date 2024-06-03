"use client";

import React, { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { jsPDF } from "jspdf";
import Image from "next/image";

const Content = ({ currentUser, title }) => {
	const [student, setStudent] = useState(currentUser.name);
	const domEl = useRef(null);

	const downloadCertificate = async () => {
		const dataUrl = await htmlToImage.toJpeg(domEl.current);

		//download certificate
		const link = document.createElement("a");
		link.download = `${student.toLowerCase().replaceAll(" ", "-")}.jpg`;
		link.href = dataUrl;
		link.click();
	};

	const downloadCertificatePdf = async () => {
		const dataUrl = await htmlToImage.toJpeg(domEl.current);

		const pdf = new jsPDF();
		pdf.addImage(dataUrl, "JPEG", 10, 10, 180, 150);
		pdf.save(`${student.toLowerCase().replaceAll(" ", "-")}.pdf`);
	};
	return (
		<>
			<div className="ptb-100 get-certificate">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="form-box">
								<form>
									<label className="mb-2">
										Enter your name
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Enter your name"
										value={student}
										onChange={(e) =>
											setStudent(e.target.value)
										}
									/>
								</form>
							</div>
						</div>

						<div className="col-lg-8">
							<div
								id="domEl"
								ref={domEl}
								className="certificate-img"
							>
								<div className="content">
									<h2>{student}</h2>
									<p>
										For completing the <b>{title}</b>
									</p>
								</div>
								<Image
									width={2000}
									height={1414}
									src="/images/certificate.png"
									alt=""
								/>
							</div>

							<div className="caption">
								<button
									className="download-btn"
									onClick={downloadCertificate}
									title="JPEG Image"
								>
									<i className="bx bxs-file-jpg"></i>
								</button>{" "}
								<button
									className="download-btn"
									onClick={downloadCertificatePdf}
									title="PDF"
								>
									<i className="bx bxs-file-pdf"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
