import styled from 'styled-components';

const StyledGameCard = styled.div`
	width: 17rem;
	display: flex;
	flex-direction: column;
	background-color: #1e1e1e;
	border-radius: 20px;
	padding: 1.5rem;
	box-shadow: 2px 2px 10px 0px #00000036;
`;

const StyledGameCardTop = styled.div`
	display: flex;
	justify-content: space-between;
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
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ $isActive }) => $isActive && 'steelblue'};
	border: 1px solid steelblue;
	cursor: pointer;
`;

const StyledGameTabPlatform = styled.span`
	font-size: 0.8rem;
	padding: 0.5rem;
`;

const StyledGameAddToCart = styled.div`
	display: flex;
	justify-content: space-between;
`;

export {
	StyledGameCard,
	StyledGameCardTop,
	StyledGameImg,
	StyledGameTabs,
	StyledGameAddToCart,
	StyledGameTab,
	StyledGameTabPlatform
};
