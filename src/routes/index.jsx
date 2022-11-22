import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useDispatch } from "react-redux";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";

import { ThemeContext } from "utils/context";
//import { setFavorites } from "utils/redux/reducers/reducer";

function App() {
	//const dispatch = useDispatch();
	const [isLight, setIsLight] = useState(true);
	const theme = useMemo(() => ({ isLight, setIsLight }), [isLight]);

	useEffect(() => {
		if (isLight) {
			document.documentElement.classList.remove("dark");
		} else {
			document.documentElement.classList.add("dark");
		}
	}, [isLight]);

	//ambil data pokemon
	//(() => {});

	return (
		<ThemeContext.Provider value={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/detail/:pokemon_name"
						element={<Detail />}
					/>
					<Route
						path="/favorites"
						element={<Favorite />}
					/>
					<Route
						path="*"
						element={<div>404 Error Not Found</div>}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
}

export default App;
