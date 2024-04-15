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
	justify-content: flex-start;
	align-items: center;
`;

export { StyledGamesContainer, StyledGames };
