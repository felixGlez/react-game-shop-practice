import { useState } from 'react';
import Filters from '../filters/Filters';
import GamesContainer from '../games-container/GamesContainer';
import { StyledBody } from './styles';
import { PRODUCTS } from '../../constants/products';

// LA APP SOLO TIENE 3 ESTADOS: EL DE LOS FILTROS, EL DE LAS TABS Y EL DEL CARRITO.

const Body = () => {
	const [filters, setFilters] = useState({
		ps5: false,
		ps4: false,
		pc: false,
		xbox: false
	});
	console.log(filters);

	const filteredGames = PRODUCTS.filter(product =>
		product.platforms.some(platform => platform.name === 'PS5')
	);
	console.log(filteredGames);

	return (
		<StyledBody>
			<Filters filters={filters} setFilters={setFilters} />
			<GamesContainer />
		</StyledBody>
	);
};

export default Body;
