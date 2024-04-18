import { useState } from 'react';
import { PRODUCTS } from '../constants/products';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		ps5: false,
		ps4: false,
		pc: false,
		xbox: false
	});

	const filteredGames = PRODUCTS.filter(product =>
		product.platforms.some(platform => platform.name === 'PS5')
	);

	const handleCheck = event => {
		const { name, checked } = event.target;
		// setFilters({ ...filters, [name]: !filters[name] });
		// es equivalente, pero más óptimo esto:
		setFilters({ ...filters, [name]: checked });
	};

	return { filters, filteredGames, handleCheck };
};
