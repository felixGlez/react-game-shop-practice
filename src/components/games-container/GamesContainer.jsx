import { StyledGames, StyledGamesContainer } from './styles';
import GameCard from '../game-card/GameCard';

const GamesContainer = ({ filteredGames }) => {
	return (
		<StyledGamesContainer>
			<h2>Games</h2>
			<StyledGames>
				{filteredGames.map(game => (
					<GameCard key={game.id} game={game} />
				))}
			</StyledGames>
		</StyledGamesContainer>
	);
};

export default GamesContainer;
