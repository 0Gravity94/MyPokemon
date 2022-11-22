import React from "react";

import { ButtorPrimary } from "./Button";

function Cards(props) {
	return (
		<div>
			<img
				src={props.image}
				alt={props.name}
			/>
			<h1>{props.name}</h1>
			<div>
				height={props.height}
				weight={props.weight}
			</div>
		</div>
	);
}

export default Cards;
