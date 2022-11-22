import { useEffect, useState } from "react";
import axios from "axios";

import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/useTitle";

import Layout from "components/Layout";
import Cards from "components/CardDetail";
import { useFetchGet } from "utils/hooks/useFetchGet";

function Detail() {
	const [pokemons, setPokemons] = useState([]);
	fetch(`https://pokeapi.co/api/v2/pokemon/`)
		.then((response) => response.json())
		.then(function (allPokemon) {
			allPokemon.results.forEach(function (pokemon) {
				setPokemons(pokemon);
			});
		});

	return (
		<Layout>
			<div>
				<p className="text-black dark:text-white">how do I get this pokeomn's detail T.T</p>
			</div>
		</Layout>
	);
}

export default WithRouter(Detail);
