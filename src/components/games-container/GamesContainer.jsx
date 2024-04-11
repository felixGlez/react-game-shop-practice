import { PRODUCTS } from '../../constants/products';
import {
	StyledGameAddToCart,
	StyledGameCard,
	StyledGameCardTop,
	StyledGameImg,
	StyledGameTab,
	StyledGameTabs,
	StyledGames,
	StyledGamesContainer
} from './styles';

const GamesContainer = () => {
	return (
		<StyledGamesContainer>
			<h2>Games</h2>
			<StyledGames>
				{PRODUCTS.map(game => (
					<StyledGameCard key={game.id}>
						<StyledGameCardTop>
							<StyledGameImg src={game.image} />
							<StyledGameTabs>
								{game.platforms.map(platform => (
									<StyledGameTab key={platform.id}>
										<p>{platform.name}</p>
									</StyledGameTab>
								))}
							</StyledGameTabs>
						</StyledGameCardTop>
						<p>{game.name}</p>
						<StyledGameAddToCart>
							<button>Add to Cart</button>
							<span>24.99€</span>
						</StyledGameAddToCart>
					</StyledGameCard>
				))}
			</StyledGames>
		</StyledGamesContainer>
	);
};

export default GamesContainer;
