import styled from 'styled-components';

const StyledGamesContainer = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
`;

const StyledGames = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	justify-content: center;
	align-items: center;
`;

const StyledGameCard = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #1e1e1e;
	border-radius: 20px;
	padding: 1.5rem;
	box-shadow: 2px 2px 10px 0px #00000036;
`;

const StyledGameCardTop = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const StyledGameImg = styled.img`
	width: 10rem;
`;

const StyledGameTabs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const StyledGameTab = styled.div`
	background-color: lightcoral;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
	cursor: pointer;
`;

const StyledGameAddToCart = styled.div`
	display: flex;
	justify-content: space-between;
`;

export {
	StyledGamesContainer,
	StyledGames,
	StyledGameCard,
	StyledGameCardTop,
	StyledGameImg,
	StyledGameTabs,
	StyledGameAddToCart,
	StyledGameTab
};
