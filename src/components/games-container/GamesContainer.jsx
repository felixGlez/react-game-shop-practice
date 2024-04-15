import { PRODUCTS } from '../../constants/products';
import { StyledGames, StyledGamesContainer } from './styles';
import GameCard from '../game-card/GameCard';

const GamesContainer = () => {
	return (
		<StyledGamesContainer>
			<h2>Games</h2>
			<StyledGames>
				{PRODUCTS.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</StyledGames>
		</StyledGamesContainer>
	);
};

export default GamesContainer;
