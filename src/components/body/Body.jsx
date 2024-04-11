import Filters from '../filters/Filters';
import GamesContainer from '../games-container/GamesContainer';
import { StyledBody } from './styles';

const Body = () => {
	return (
		<StyledBody>
			<Filters />
			<GamesContainer />
		</StyledBody>
	);
};

export default Body;
