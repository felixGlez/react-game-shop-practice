import Filters from '../filters/Filters';
import GamesContainer from '../games-container/GamesContainer';
import { StyledBody } from './styles';
import { useFilters } from '../../hooks/useFilters';

// LA APP SOLO TIENE 3 ESTADOS: EL DE LOS FILTROS, EL DE LAS TABS Y EL DEL CARRITO.

const Body = () => {
	const { filters, handleCheck } = useFilters();
	console.log(filters);

	return (
		<StyledBody>
			<Filters filters={filters} handleCheck={handleCheck} />
			<GamesContainer />
		</StyledBody>
	);
};

export default Body;
