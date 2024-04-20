import { useState } from 'react';
import {
	StyledGameAddToCart,
	StyledGameCard,
	StyledGameCardTop,
	StyledGameImg,
	StyledGameTab,
	StyledGameTabPlatform,
	StyledGameTabs
} from './styles';

const GameCard = ({ game }) => {
	const [tabs, setTabs] = useState(0);

	return (
		<StyledGameCard key={game.id}>
			<StyledGameCardTop>
				<StyledGameImg src={game.image} />
				<StyledGameTabs>
					{game.platforms.map((platform, index) => (
						<StyledGameTab
							key={platform.id}
							$isActive={index === tabs}
							onClick={() => setTabs(index)}
						>
							<StyledGameTabPlatform>{platform.name}</StyledGameTabPlatform>
						</StyledGameTab>
					))}
				</StyledGameTabs>
			</StyledGameCardTop>
			<p>{game.name}</p>
			<StyledGameAddToCart>
				<button>Add to Cart</button>
				<span>{game.platforms[tabs].price}€</span>
			</StyledGameAddToCart>
		</StyledGameCard>
	);
};

export default GameCard;
