import { useState } from 'react';
import { PRODUCTS } from '../constants/products';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		PS5: false,
		PS4: false,
		PC: false,
		Xbox: false
	});
	const [sortBy, setSortBy] = useState(0);

	let filteredGames = filterByPlatform(PRODUCTS, filters);
	filteredGames = sortGames(filteredGames, sortBy);

	const handleCheck = event => {
		const { name, checked } = event.target;
		// setFilters({ ...filters, [name]: !filters[name] });
		// es equivalente, pero más óptimo esto:
		setFilters({ ...filters, [name]: checked });
	};

	return { filters, filteredGames, handleCheck, setSortBy };
};

const sortGames = (filteredGames, sortBy) => {
	const sortedGames = [...filteredGames];
	const sortByValue = Number(sortBy);

	switch (sortByValue) {
		case 0:
			return sortedGames;
		case 1:
			return sortedGames.sort((a, b) => a.name.localeCompare(b.name));
		case 2:
			return sortedGames.sort((a, b) => b.releaseDate - a.releaseDate);
	}
};

const filterByPlatform = (games, filters) => {
	const areFiltersActive = Object.values(filters).some(filter => filter);
	if (!areFiltersActive) return [...games];

	// De forma declarativa
	const filteredGamesByPlatform = games.filter(game =>
		game.platforms.some(platform => filters[platform.name])
	);

	/* EQUIVALENTE de forma imperativa:
	const gamesFiltered = [];

	games.forEach(game =>
		game.platforms.forEach(platform => {
			if (filters[platform.name]) gamesFiltered.push(game);
		})
	);

	console.log(gamesFiltered);
    */

	return filteredGamesByPlatform;
};
