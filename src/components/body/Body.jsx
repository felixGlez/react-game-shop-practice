import Filters from '../filters/Filters';
import GamesContainer from '../games-container/GamesContainer';
import { StyledBody } from './styles';
import { useFilters } from '../../hooks/useFilters';

// LA APP SOLO TIENE 3 ESTADOS: EL DE LOS FILTROS, EL DE LAS TABS Y EL DEL CARRITO.

const Body = () => {
	const { filters, filteredGames, handleCheck, setSortBy } = useFilters();
	console.log(filters);

	return (
		<StyledBody>
			<Filters handleCheck={handleCheck} setSortBy={setSortBy} />
			<GamesContainer filteredGames={filteredGames} />
		</StyledBody>
	);
};

export default Body;
