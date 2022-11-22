import { useEffect, useState } from "react";
import "styles/App.css";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/useTitle";

import Layout from "components/Layout";
import Cards from "components/Cards";
import { ButtorPrimary } from "components/Button";

function Home(props) {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadPokemon, setLoadPokemon] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=10");

	const getAllPokemons = async () => {
		const res = await fetch(loadPokemon);
		const data = await res.json();
		setLoadPokemon(data.next);

		function pokemonDisplay(result) {
			result.forEach(async (pokemon) => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const data = await res.json();
				setAllPokemons((currentList) => [...currentList, data]);
			});
		}
		pokemonDisplay(data.results);
		console.log(allPokemons);
	};
	useTitle("Home");

	useEffect(() => {
		getAllPokemons();
	}, []);

	return (
		<Layout>
			<div className="grid grid-flow-row auto-rows-max grid-cols-2 place-items-center p-6">
				{allPokemons.map((pokemon) => (
					<Cards
						id={pokemon.id}
						name={pokemon.name}
						image={pokemon.sprites.other.dream_world.front_default}
						type={pokemon.types[0].type.name}
						onNavigate={() => props.navigate(`/detail/${pokemon.name}`)}
					/>
				))}
			</div>
			<div className="flex justify-center rounded-lg border-2 border-blue-900 dark:border-white bg-poke-3 dark:bg-poke-1">
				<ButtorPrimary
					label="Load More"
					onClick={() => getAllPokemons()}
				/>
			</div>
		</Layout>
	);
}

export default WithRouter(Home);
