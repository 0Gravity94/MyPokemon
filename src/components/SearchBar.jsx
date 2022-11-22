import React, { useState } from "react";
import axios from "axios";
import { useFetchGet } from "utils/hooks/useFetchGet";

const SearchBar = () => {
	const [pokemon, setPokemon] = useState("");
	const [pokemonData, setPokemonData] = useState([]);

	const handleChange = (e) => {
		setPokemon(e.target.value.toLowercase());
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		getPokemon();
	};

	const getPokemon = async () => {
		const toArray = [];
		try {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
			const res = await axios.get(url);
			toArray.push(res.data);
			setPokemonData(toArray);
		} catch (err) {
			console.log(err);
		}
	};
	console.log(pokemonData);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="rounded-lg border-black my-3"
					type="text"
					placeholder="Enter Pokemon Name"
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
