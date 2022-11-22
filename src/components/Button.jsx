import React from "react";

function ButtorPrimary(props) {
	return (
		<div
			className="p-2 font-extrabold dark:text-white text-black text-2xl font-chackra cursor-pointer"
			onClick={props.onClick}
		>
			{props.label}
		</div>
	);
}

export { ButtorPrimary };
