import React, { useContext } from "react";
//import searchBar
import { Link } from "react-router-dom";
import "styles/App.css";
import "styles/index.css";

import { ThemeContext } from "utils/context";
import { ButtorPrimary } from "./Button";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
	const { isLight, setIsLight } = useContext(ThemeContext);

	return (
		<div id="container">
			<section className="w-auto h-screen">
				{/* Navbar Start */}
				<nav className="shadow-md bg-poke-2 dark:bg-poke-4 justify-center grid grid-cols-2 ">
					<Link to="/">
						<img
							className="w-12 h-12 p-2 items-center"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
							alt="pokeball"
						/>
					</Link>
					{/* //<SearchBar /> */}
					<div className="flex justify-end items-center">
						<ButtorPrimary
							label={
								isLight ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-8 h-8"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-8 h-8"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
										/>
									</svg>
								)
							}
							onClick={() => setIsLight(!isLight)}
						/>
					</div>
				</nav>
				{/* Navbar End */}
				{/* Content Start */}
				<div
					className="w-full h-fit dark:bg-black bg-poke-3"
					pt-20
				>
					{children}
				</div>
				{/* Content End */}
				{/* Footer Start */}
				<footer className="flex justify-around shadow-md border-t-black dark:border-t-white bg-poke-2 dark:bg-poke-4 p-4">
					<div className="flex justify-center font-chackra text-black dark:text-white">Home</div>
					<div className="flex justify-center font-chackra text-black dark:text-white">My Pokemon</div>
				</footer>
				{/* Footer End */}
			</section>
		</div>
	);
};

export default Layout;
