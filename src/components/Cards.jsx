import React from "react";

function Cards(props) {
	return (
		<div
			className="container grow grid grid-cols-2 w-3/4 h-5/6 my-5 p-5  border border-3 rounded-lg border-red-600 dark:border-white shadow-lg shadow-gray-700  bg-poke-3 dark:bg-poke-4 cursor-pointer"
			onClick={props.onNavigate}
		>
			<div className="flex flex-col justify-start">
				<h1 className="font-chackra font-extrabold text-md uppercase tracking-widest text-black dark:text-white">{props.name}</h1>
				<h3 className="text-black dark:text-white">
					Type:
					<p className="text-md italic rounded-lg shadow-md shadow-indigo-400 border-2 dark:border-white dark:text-white border-poke-1 text-center font-bold p-1 m-1">{props.type}</p>
				</h3>
			</div>
			<div className="flex place-content-end">
				<img
					className="w-3/4 h-auto ml-5"
					src={props.image}
					alt={props.name}
				/>
			</div>
		</div>
	);
}

export default Cards;
