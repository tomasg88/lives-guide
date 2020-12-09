import React from "react";

export default function Container({ children }) {
	return (
		<div className="cccc mt-64 h-auto p-40 flex justify-center items-end overflow-hidden">
			{children}
		</div>
	);
}